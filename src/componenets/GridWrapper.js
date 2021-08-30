import React, { useState } from "react";
import styled from "styled-components";
import { isObject } from "../helpers/helpers";
const StyledGridWrapper = styled.div`
  border: black solid 2px;
  background: black;
  height: 400px;
  min-width: 400px;
  display: grid;
  grid-gap: 2px;
  grid-template:
    repeat(${(props) => props.gridRows}, 1fr) /
    repeat(${(props) => props.gridColumns}, 1fr);
`;

const StyledGridItem = styled.div`
  background-color: ${(props) => {
    if (!props.status) {
      return "white";
    } else if (props.status === "miss") {
      return "blue";
    } else {
      return "pink";
    }
  }};
  &:hover {
    background-color: red;
  }
`;

const GridWrapper = ({
  player,
  game,
  setComputerGameboard,
  enemyGame,
  gameboard,
  enemyGameboard,
  setPlayerGameboard,
}) => {
  const hitSpace = (row, column) => {
    if (player.getPlayer() === "computer") {
      player.autoAttack(gameboard);
    }
    player.attack(row, column, enemyGameboard);
    if (gameboard.gameOver()) {
      alert("Game Over");
    }
    setComputerGameboard([...enemyGameboard.board]);
  };

  const showGridStatus = (item) => {
    if (item === undefined || (isObject(item) && !item.hit)) {
      return false;
    } else if (item === "O") {
      return "miss";
    } else {
      return "hit";
    }
  };

  return (
    <StyledGridWrapper
      gridColumns={gameboard[0].length}
      gridRows={gameboard.length}
    >
      {gameboard.map((row, rowIndex) =>
        row.map((item, columnIndex) => (
          <StyledGridItem
            // onClick={() =>
            //   player.getPlayer() === "computer"
            //     ? hitSpace(rowIndex, columnIndex)
            //     : console.log("hi")
            // }
            status={showGridStatus(item)}
          />
        ))
      )}
    </StyledGridWrapper>
  );
};

export default GridWrapper;
