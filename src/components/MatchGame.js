import React from "react";
import { useEffect, useState, useRef } from "react";
import "../css/matchgame.css";
import Card from "./Card.js";
import {
  pixarCardsArray,
  batmanCardsArray,
  marioCardsArray,
  spongeCardsArray,
} from "../lib/data.js";
import Modal from "../components/Modal.js";
import shuffleCards from "../lib/ShuffleCards.js";
import DeckSelection from "./DeckSelection.js";

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
    if (Object.keys(clearedCards).length === pixarCardsArray.length) {
      setShowModal(true);
      //const highScore = Math.min(moves, bestScore);
      //  setBestScore(highScore);
      //localStorage.setItem("bestScore", highScore);
      console.log("Done in " + moves);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    //Match
    if (cards[first] === cards[second]) {
      //setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setClearedCards((prev) => [...prev, cards[first]]);
      console.log("Match");
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

  const pickCardDeck = (selection) => {
    if (selection === "pixar") {
      setCards(shuffleCards(pixarCardsArray.concat(pixarCardsArray)));
      setCurrentBackground(pixarCardsArray[0].background);
    } else if (selection === "batman") {
      setCards(shuffleCards(batmanCardsArray.concat(batmanCardsArray)));
      setCurrentBackground(batmanCardsArray[0].background);
    } else if (selection === "spongebob") {
      setCards(shuffleCards(spongeCardsArray.concat(spongeCardsArray)));
      setCurrentBackground(spongeCardsArray[0].background);
    } else {
      setCards(shuffleCards(marioCardsArray.concat(marioCardsArray)));
      setCurrentBackground(marioCardsArray[0].background);
    }

    setStartGame(true);
  };

  return (
    <>
      {!startGame && <DeckSelection deckPicked={pickCardDeck} />}
      <main className="main">
        {showModal ? <Modal moveCount={moves} /> : ""}
        <img src={currentBackground} alt="background" />
        <div className="white-out">
          <div className="score_card">
            <h2>Moves: {moves}</h2>
            <h2>Match Count: {clearedCards.length}</h2>
          </div>
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
