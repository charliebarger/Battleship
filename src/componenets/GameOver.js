import React from "react";

const GameOver = ({ handleClick, player }) => {
  return (
    <div>
      <button onClick={() => handleClick(false)}>{player}</button>
    </div>
  );
};

export default GameOver;
