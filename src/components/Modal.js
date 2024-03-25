import React, { useEffect, useState } from "react";
import "../css/modal.css";
import "../css/button.css";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Modal({ moveCount, victoryImage, gameOver, victoryMusic }) {
  const { width, height } = useWindowSize();
  const { startMusic, setStartMusic } = useState(gameOver);
  let musicPlayer = new Audio(victoryMusic);

  useEffect(() => {
    if (gameOver) {
      musicPlayer.play();
    }
  }, [gameOver]);

  const newGame = () => {
    musicPlayer.pause();
    window.location.reload();
  };

  function stopMusic() {
    console.log("Stop music");
    musicPlayer.pause();
  }

  return (
    <main className="winner-container">
      <Confetti width={width} height={height} />
      <div className="winner-box">
        <h1>You won in {moveCount} moves</h1>
        <div className="victory-image-container">
          <img src={victoryImage} alt="victory" className="victory-image" />
        </div>
        <div className="button-container">
          <Link to="/">
            <button onClick={() => stopMusic()} className="large_button">
              Home
            </button>
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
