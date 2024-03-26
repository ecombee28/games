import React from "react";
import { useEffect, useState, useRef } from "react";
import "../css/matchgame.css";
import Card from "./Card.js";
import Modal from "./VicotryModel.js";
import DeckSelection from "./DeckSelection.js";
import ScoreCard from "./ScoreCard.js";

export default function MatchGame() {
  const [startGame, setStartGame] = useState(false);
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const timeout = useRef(null);
  const [shouldRemoveCard, setShouldRemoveCard] = useState(false);
  const [currentBackground, setCurrentBackground] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [music, setMusic] = useState("");
  const [victoryImage, setVictoryImage] = useState("");
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(false);
  const [player2Turn, setPlayer2Turn] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [winnersName, setWinnerNames] = useState("");
  const [winningScore, setWinningScore] = useState(0);
  const deckSize = 13;

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === deckSize) {
      if (player1Score > player2Score) {
        setWinnerNames(player1Name);
        setWinningScore(player1Score);
      } else {
        setWinnerNames(player2Name);
        setWinningScore(player2Score);
      }
      setShowModal(true);
      setGameOver(true);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    //Match
    if (cards[first] === cards[second]) {
      setClearedCards((prev) => [...prev, cards[first]]);
      if (numberOfPlayers !== 1) {
        if (player1Turn) {
          setPlayer1Score((score) => score + 1);
        } else {
          setPlayer2Score((score) => score + 1);
        }
      }
      setShouldRemoveCard(!shouldRemoveCard);
    }

    if (numberOfPlayers !== 1) {
      if (player1Turn) {
        setPlayer1Turn(false);
        setCurrentPlayer(player2Name);
        setPlayer2Turn(true);
      } else {
        setPlayer2Turn(false);
        setCurrentPlayer(player1Name);
        setPlayer1Turn(true);
      }
    }

    setOpenCards([]);
    enable();

    //reset open cards array in 3s
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 1000);
  };

  const handleCardClick = (index) => {
    // Have a maximum of 2 items in array at once.
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      // increase the moves once we opened a pair
      setMoves((moves) => moves + 1);
      disable();
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (index) => {
    return clearedCards.includes(cards[index]);
  };

  function setDeckInformation(
    deck,
    background,
    music,
    numberOfPlayers,
    victoryImage,
    playerOneName,
    playerTwoName
  ) {
    setCards(deck);
    setCurrentBackground(background);
    setMusic(music);
    setNumberOfPlayers(numberOfPlayers);
    setVictoryImage(victoryImage);
    setPlayer1Turn(true);
    if (numberOfPlayers === 2) {
      setPlayer1Name(playerOneName);
      setPlayer2Name(playerTwoName);
      setCurrentPlayer(playerOneName);
    }
    setStartGame(true);
  }

  return (
    <>
      {!startGame && <DeckSelection deckInfo={setDeckInformation} />}
      <main className="main">
        {showModal && (
          <Modal
            moveCount={moves}
            victoryImage={victoryImage}
            gameOver={gameOver}
            victoryMusic={music}
            winningName={winnersName}
            winningScore={winningScore}
          />
        )}
        <img
          src={currentBackground}
          alt="background"
          className="match-background"
        />
        <div className="white-out">
          <ScoreCard
            currentPlayersTurn={currentPlayer}
            moves={moves}
            matchCount={clearedCards.length}
            numberOfPlayers={numberOfPlayers}
            player1Score={player1Score}
            player2Score={player2Score}
            playerOneName={player1Name}
            playerTwoName={player2Name}
          />
          <div className={"game_container"}>
            {cards.map((card, index) => (
              <Card
                card={card}
                key={index}
                index={index}
                isDisabled={shouldDisableAllCards}
                isInactive={checkIsInactive(index)}
                isFlipped={checkIsFlipped(index)}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
