import React from "react";
import "../css/deckselection.css";
import PixarImag from "../img/pixar/victory.png";
import BatmanImg from "../img/batman/victory.png";
import SpongImg from "../img/sponge/victory.png";
import MarioImg from "../img/mariobros/victory.png";
import "../css/button.css";
import shuffleCards from "../lib/ShuffleCards.js";
import {
  pixarCardsArray,
  batmanCardsArray,
  marioCardsArray,
  spongeCardsArray,
} from "../lib/data.js";

export default function DeckSelection({ deckInfo }) {
  const handleSelection = (selection) => {
    if (selection === "pixar") {
      deckInfo(
        shuffleCards(pixarCardsArray.concat(pixarCardsArray)),
        pixarCardsArray[0].background,
        pixarCardsArray[0].victoryMusic
      );
    } else if (selection === "batman") {
      deckInfo(
        shuffleCards(batmanCardsArray.concat(batmanCardsArray)),
        batmanCardsArray[0].background,
        batmanCardsArray[0].victoryMusic
      );
    } else if (selection === "spongebob") {
      deckInfo(
        shuffleCards(spongeCardsArray.concat(spongeCardsArray)),
        spongeCardsArray[0].background,
        spongeCardsArray[0].victoryMusic
      );
    } else {
      deckInfo(
        shuffleCards(marioCardsArray.concat(marioCardsArray)),
        marioCardsArray[0].background,
        marioCardsArray[0].victoryMusic
      );
    }
  };

  return (
    <div className="deck-selection-main-wrapper">
      <div className="deck-selection-box">
        <span className="title">Pick your deck of cards</span>
        <div className="selection-wrapper">
          <div className="selection-box">
            <img src={PixarImag} alt="" />
            <button
              className="medium_button"
              onClick={() => handleSelection("pixar")}
            >
              Pixar Deck
            </button>
          </div>
          <div className="selection-box">
            <img src={BatmanImg} alt="" />
            <button
              className="medium_button"
              onClick={() => handleSelection("batman")}
            >
              Batman Deck
            </button>
          </div>
          <div className="selection-box">
            <img src={SpongImg} alt="" />
            <button
              className="medium_button"
              onClick={() => handleSelection("spongebob")}
            >
              Spongebob Deck
            </button>
          </div>
          <div className="selection-box">
            <img src={MarioImg} alt="" />
            <button
              className="medium_button"
              onClick={() => handleSelection("mario")}
            >
              Mario Bros. Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
