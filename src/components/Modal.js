import React from "react";
import "../css/modal.css";
import "../css/button.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Modal({ moveCount }) {
  const { width, height } = useWindowSize();
  const newGame = () => {
    window.location.reload();
  };
  return (
    <main className="winner-container">
      <Confetti width={width} height={height} />
      <div className="winner-box">
        <h1>You won in {moveCount} movies</h1>
        <div className="button-container">
          <Link to="/">
            <button className="large_button">Home</button>
          </Link>
          <button className="large_button" onClick={newGame}>
            New Game
          </button>
        </div>
      </div>
    </main>
  );
}

export default Modal;
