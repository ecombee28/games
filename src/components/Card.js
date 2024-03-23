import React from "react";
import "../css/card.css";

export default function Card({
  card,
  index,
  isDisabled,
  isInactive,
  isFlipped,
  onClick,
}) {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div>
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isInactive ? "inactive" : ""}`}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={card.frontImage} alt="frontImage" />
          </div>
          <div className="flip-card-back">
            <img src={card.image} alt="backdrop" />
          </div>
        </div>
      </div>
    </div>
  );
}
