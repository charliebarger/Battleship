import React from "react";

const GameOver = ({ handleClick, player }) => {
  return (
    <div>
      <div>{player === "player" ? "You Lost" : "You Won"}!</div>
      <button onClick={() => handleClick(false)}>Play Again</button>
    </div>
  );
};

export default GameOver;
