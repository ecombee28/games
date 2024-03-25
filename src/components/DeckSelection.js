import React, { useState } from "react";
import "../css/deckselection.css";
import PixarImag from "../img/pixar/card.png";
import BatmanImg from "../img/batman/card.png";
import SpongImg from "../img/sponge/card.png";
import MarioImg from "../img/mariobros/card.png";
import "../css/button.css";
import shuffleCards from "../lib/ShuffleCards.js";
import {
  pixarCardsArray,
  batmanCardsArray,
  marioCardsArray,
  spongeCardsArray,
} from "../lib/data.js";

export default function DeckSelection({ deckInfo }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [cards, setCards] = useState([]);
  const [background, setBackground] = useState("");
  const [music, setMusic] = useState("");
  const [victoryImage, setVictoryImage] = useState("");
  const [pixarPicked, setPixarPicked] = useState(false);
  const [batmanPicked, setBatmanPicked] = useState(false);
  const [marioPicked, setMarioPicked] = useState(false);
  const [spongePicked, setSpongePicked] = useState(false);
  const [player1, setPlayer1] = useState(false);
  const [player2, setPlayer2] = useState(false);
  const [allSelected, setAllSelected] = useState(true);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handleSelection = (selection) => {
    if (selection === "pixar" && !pixarPicked) {
      setPixarPicked(true);
      setCards(shuffleCards(pixarCardsArray.concat(pixarCardsArray)));
      setBackground(pixarCardsArray[0].background);
      setMusic(pixarCardsArray[0].victoryMusic);
      setVictoryImage(pixarCardsArray[0].victoryImage);
      handleDeckButton(selection);
    } else if (selection === "batman" && !batmanPicked) {
      setBatmanPicked(true);
      setCards(shuffleCards(batmanCardsArray.concat(batmanCardsArray)));
      setBackground(batmanCardsArray[0].background);
      setMusic(batmanCardsArray[0].victoryMusic);
      setVictoryImage(batmanCardsArray[0].victoryImage);
      handleDeckButton(selection);
    } else if (selection === "spongebob" && !spongePicked) {
      setSpongePicked(true);
      setCards(shuffleCards(spongeCardsArray.concat(spongeCardsArray)));
      setBackground(spongeCardsArray[0].background);
      setMusic(spongeCardsArray[0].victoryMusic);
      setVictoryImage(spongeCardsArray[0].victoryImage);
      handleDeckButton(selection);
    } else if (selection === "mario" && !marioPicked) {
      setMarioPicked(true);
      setCards(shuffleCards(marioCardsArray.concat(marioCardsArray)));
      setBackground(marioCardsArray[0].background);
      setMusic(marioCardsArray[0].victoryMusic);
      setVictoryImage(marioCardsArray[0].victoryImage);
      handleDeckButton(selection);
    }
  };

  function handleDeckButton(selection) {
    if (selection === "pixar") {
      setPixarPicked(!pixarPicked);
      setBatmanPicked(false);
      setMarioPicked(false);
      setSpongePicked(false);
    } else if (selection === "batman") {
      setBatmanPicked(!batmanPicked);
      setPixarPicked(false);
      setMarioPicked(false);
      setSpongePicked(false);
    } else if (selection === "spongebob") {
      setSpongePicked(!spongePicked);
      setPixarPicked(false);
      setBatmanPicked(false);
      setMarioPicked(false);
    } else {
      setMarioPicked(!marioPicked);
      setPixarPicked(false);
      setBatmanPicked(false);
      setSpongePicked(false);
    }
  }

  function handleNumberOfPlayersSelection(selection) {
    if (selection === 1 && !player1) {
      setNumberOfPlayers(1);
      setPlayer1(true);
      setPlayer2(false);
    } else if (selection === 1 && player1) {
      setNumberOfPlayers(0);
      setPlayer1(false);
      setPlayer2(false);
    } else if (selection === 2 && !player2) {
      setNumberOfPlayers(2);
      setPlayer2(true);
      setPlayer1(false);
    } else if (selection === 2 && player2) {
      setNumberOfPlayers(0);
      setPlayer2(false);
      setPlayer1(false);
    }
  }

  function startGame() {
    if (cards.length !== 0 && numberOfPlayers !== 0) {
      setAllSelected(true);
      deckInfo(
        cards,
        background,
        music,
        numberOfPlayers,
        victoryImage,
        player1Name.length !== 0 ? player1Name : "Player 1",
        player2Name.length !== 0 ? player2Name : "Player 2"
      );
    } else {
      setAllSelected(false);
    }
  }

  return (
    <div className="deck-selection-main-wrapper">
      <div className="deck-selection-box">
        <span className="title">Pick your deck of cards</span>
        {!allSelected && <span className="alert">Make all selections</span>}
        <div className="selection-wrapper">
          <div className="selection-box">
            <img src={PixarImag} alt="" />
            <button
              className={`medium_button ${pixarPicked && "button-clicked"}`}
              onClick={() => handleSelection("pixar")}
            >
              Pixar Deck
            </button>
          </div>
          <div className="selection-box">
            <img src={BatmanImg} alt="" />
            <button
              className={`medium_button ${batmanPicked && "button-clicked"}`}
              onClick={() => handleSelection("batman")}
            >
              Batman Deck
            </button>
          </div>
          <div className="selection-box">
            <img src={SpongImg} alt="" />
            <button
              className={`medium_button ${spongePicked && "button-clicked"}`}
              onClick={() => handleSelection("spongebob")}
            >
              SpongeBob Deck
            </button>
          </div>
          <div className="selection-box">
            <img src={MarioImg} alt="" />
            <button
              className={`medium_button ${marioPicked && "button-clicked"}`}
              onClick={() => handleSelection("mario")}
            >
              Mario Bros. Deck
            </button>
          </div>
        </div>
        <h1>How many players</h1>
        <div className="player-selection-container">
          <button
            className={`medium_button ${player1 && "button-clicked"}`}
            onClick={() => handleNumberOfPlayersSelection(1)}
          >
            1
          </button>
          <button
            className={`medium_button ${player2 && "button-clicked"}`}
            onClick={() => handleNumberOfPlayersSelection(2)}
          >
            2
          </button>
        </div>
        {player2 && (
          <div className="play-name-input-container">
            <div className="name-container">
              <label className="name-input-label">Player 1 Name:</label>
              <input
                type="text"
                className="name-input"
                onKeyUp={(e) => setPlayer1Name(e.target.value)}
                autoComplete="off"
                maxLength={10}
              />
            </div>
            <div className="name-container">
              <label className="name-input-label">Player 2 Name:</label>
              <input
                type="text"
                className="name-input"
                onKeyUp={(e) => setPlayer2Name(e.target.value)}
                autoComplete="off"
                maxLength={10}
              />
            </div>
          </div>
        )}
        <button
          className="medium_button start-button"
          onClick={() => startGame()}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
