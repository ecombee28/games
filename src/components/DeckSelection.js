import React from "react";
import "../css/deckselection.css";
import PixarImag from "../img/pixar/victory.png";
import BatmanImg from "../img/batman/victory.png";
import SpongImg from "../img/sponge/victory.png";
import MarioImg from "../img/mariobros/victory.png";
import "../css/button.css";

export default function DeckSelection({ deckPicked }) {
  const handleSelection = (selection) => {
    deckPicked(selection);
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
