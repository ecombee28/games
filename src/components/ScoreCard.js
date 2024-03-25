import React from "react";
import "../css/scorecard.css";

const ScoreCard = ({
  currentPlayersTurn,
  moves,
  matchCount,
  numberOfPlayers,
  player1Score,
  player2Score,
  playerOneName,
  playerTwoName,
}) => {
  return (
    <div>
      {numberOfPlayers === 1 ? (
        <div className="score-card-single">
          <h2>Moves: {moves}</h2>
          <h2>Match Count: {matchCount}</h2>
        </div>
      ) : (
        <div className="score-card-double">
          <h2 className="current-players-turn-wrapper">
            It's <span>{currentPlayersTurn}'s</span> turn
          </h2>
          <h2 className="player-scores-wraper player-1">
            {playerOneName} score: {player1Score}
          </h2>
          <h2 className="player-scores-wraper player-2">
            {playerTwoName} score: {player2Score}
          </h2>
        </div>
      )}
    </div>
  );
};

export default ScoreCard;
