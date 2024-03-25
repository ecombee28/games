import React from "react";
import "../css/scorecard.css";

const ScoreCard = ({ moves, matchCount }) => {
  return (
    <div>
      <div className="score_card">
        <h2>Moves: {moves}</h2>
        <h2>Match Count: {matchCount}</h2>
      </div>
    </div>
  );
};

export default ScoreCard;
