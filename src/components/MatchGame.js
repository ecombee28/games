import React from "react";
import { useEffect, useState, useRef } from "react";
import "../css/matchgame.css";
import Card from "./Card.js";
import Modal from "../components/Modal.js";
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
    if (Object.keys(clearedCards).length === 3) {
      setShowModal(true);
      setGameOver(true);
      //new Audio(music).play();
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    //Match
    if (cards[first] === cards[second]) {
      //setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setClearedCards((prev) => [...prev, cards[first]]);
      setShouldRemoveCard(!shouldRemoveCard);
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

  function setDeckInformation(deck, background, music) {
    setCards(deck);
    setCurrentBackground(background);
    setMusic(music);
    setStartGame(true);
  }

  return (
    <>
      {!startGame && <DeckSelection deckInfo={setDeckInformation} />}
      <main className="main">
        {showModal && (
          <Modal
            moveCount={moves}
            victoryImage={cards[0].victoryImage}
            gameOver={gameOver}
            victoryMusic={cards[0].victoryMusic}
          />
        )}
        <img
          src={currentBackground}
          alt="background"
          className="match-background"
        />
        <div className="white-out">
          <ScoreCard moves={moves} matchCount={clearedCards.length} />
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
