import React from "react";
import GridWrapper from "./GridWrapper";
import getFleet from "../helpers/ships";

const SetShips = ({
  gameboard,
  player,
  handleClick,
  ship,
  removeHover,
  setRotate,
}) => {
  return (
    <div>
      <GridWrapper
        gameboard={gameboard}
        player={player}
        handleClick={handleClick}
        ship={ship}
        removeHover={removeHover}
      />
      <button onClick={() => ship.toggleRotate()}>Toggle Rotate</button>
    </div>
  );
};

export default SetShips;
