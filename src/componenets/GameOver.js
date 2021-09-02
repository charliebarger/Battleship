import React from "react";

const GameOver = ({ handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick(false)}>Game Over</button>
    </div>
  );
};

export default GameOver;
