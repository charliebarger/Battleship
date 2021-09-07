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
    transform: scale(1.05);
    background-color: red;
    border: black solid 1px;
  }
`;

const GridWrapper = ({ gameboard, player, handleClick, ship, removeHover }) => {
  function getColor(item) {
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
            onClick={() => {
              //if no ship is specified play game else place ships
              !ship
                ? handleClick(item, rowIndex, columnIndex)
                : handleClick(rowIndex, columnIndex, ship);
            }}
            onMouseEnter={
              //if remove hover is specified apply apply and remove ships on mouseEnter and mouseLeave
              removeHover
                ? () => handleClick(rowIndex, columnIndex, ship, true)
                : undefined
            }
            onMouseLeave={
              removeHover ? () => removeHover(ship, gameboard) : undefined
            }
            color={getColor(item)}
          />
        ))
      )}
    </StyledGridWrapper>
  );
};

export default GridWrapper;
