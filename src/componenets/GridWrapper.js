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
  background-color: ${(props) => props.color};
  &:hover {
    background-color: red;
  }
`;

const GridWrapper = ({
  gameboard,
  player,
  game,
  enemyGame,
  enemyGameboard,
  setComputerGameboard,
  setPlayerGameboard,
  setGameOver,
  gameOver,
}) => {
  const hitSpace = (row, column) => {
    player.autoAttack(enemyGame);
    game.recieveAttack(row, column);
    if (game.gameOver()) {
      alert("I WON");
      setGameOver(true);
      return;
    } else if (enemyGame.gameOver()) {
      alert("I Lost");
      setGameOver(true);
      return;
    }
    setComputerGameboard([...gameboard]);
    setPlayerGameboard([...enemyGameboard]);
  };

  function getColoritem(item) {
    let color;
    if (isObject(item)) {
      if (item.hit) {
        color = "violet";
      } else if (player.getPlayer() === "player") {
        color = item.shipName.color;
      } else {
        color = "white";
      }
    } else if (item === "O") {
      return "red";
    } else {
      return "white";
    }
    return color;
  }

  return (
    <StyledGridWrapper
      gridColumns={gameboard[0].length}
      gridRows={gameboard.length}
    >
      {gameboard.map((row, rowIndex) =>
        row.map((item, columnIndex) => (
          <StyledGridItem
            onClick={() =>
              player.getPlayer() === "computer" &&
              (!item || (isObject(item) && !item.hit))
                ? hitSpace(rowIndex, columnIndex)
                : undefined
            }
            color={getColoritem(item)}
          />
        ))
      )}
    </StyledGridWrapper>
  );
};

export default GridWrapper;
