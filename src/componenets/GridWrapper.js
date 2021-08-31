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
  background-color: white;
  &:hover {
    background-color: red;
  }
`;

const GridWrapper = ({ gameboard, enemyGameboard, player }) => {
  function getColoritem(item) {
    let color;
    if (isObject(item)) {
      if (item.hit) {
        color = "violet";
      } else if (player === "player") {
        color = "blue";
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
      gridColumns={gameboard.board[0].length}
      gridRows={gameboard.board.length}
    >
      {gameboard.board.map((row, rowIndex) =>
        row.map((item, columnIndex) => {
          return (
            <StyledGridItem style={{ backgroundColor: getColoritem(item) }} />
          );
        })
      )}
    </StyledGridWrapper>
  );
};

export default GridWrapper;
