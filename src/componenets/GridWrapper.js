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

const GridWrapper = ({ gameboard, enemyGameboard }) => {
  const [playerGameboard, setplayerGameboard] = useState(gameboard.board);

  const hitSpace = (row, column) => {
    gameboard.recieveAttack(row, column);
    setplayerGameboard([...gameboard.board]);
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
      gridColumns={gameboard.board[0].length}
      gridRows={gameboard.board.length}
    >
      {playerGameboard.map((row, rowIndex) =>
        row.map((item, columnIndex) => (
          <StyledGridItem
            onClick={() => hitSpace(rowIndex, columnIndex)}
            status={showGridStatus(item)}
          />
        ))
      )}
    </StyledGridWrapper>
  );
};

export default GridWrapper;
