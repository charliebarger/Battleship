import React, { useState } from "react";
import styled, { css } from "styled-components";
import { isObject } from "../helpers/helpers";
import explode from "../images/explosion.png";
const StyledGridWrapper = styled.div`
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: ${(props) =>
    props.player === "player"
      ? "linear-gradient(to left, #743ad5, #d53a9d)"
      : "linear-gradient(-45deg, red, #fae900)"};
  background: black;
  height: 400px;
  min-width: 400px;
  max-width: 400px;
  display: grid;
  grid-gap: 2px;
  grid-template:
    repeat(${(props) => props.gridRows}, 1fr) /
    repeat(${(props) => props.gridColumns}, 1fr);
`;

const StyledGridItem = styled.div`
  background-color: ${(props) => props.color};
  ${({ border }) =>
    border &&
    css`
      border: 2px solid ${border};
    `}
  &:hover {
    transform: scale(1.05);
    background-color: red;
    border: black solid 1px;
  }
`;

const GridWrapper = ({ gameboard, player, handleClick, ship, removeHover }) => {
  function getColor(item) {
    let color;
    let border;
    if (isObject(item)) {
      if (item.hit) {
        color = "hit";
      } else if (player.getPlayer() === "player") {
        console.log(item.shipName.border);
        color = item.shipName.color;
        border = item.shipName.border;
      } else {
        color = "white";
      }
    } else if (item === "O") {
      color = "#266691";
    } else {
      color = "white";
    }
    return { color, border };
  }

  return (
    <StyledGridWrapper
      gridColumns={gameboard[0].length}
      gridRows={gameboard.length}
      player={player.getPlayer()}
    >
      {gameboard.map((row, rowIndex) =>
        row.map((item, columnIndex) =>
          !(isObject(item) && item.hit) ? (
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
              color={getColor(item).color}
              border={getColor(item).border}
            />
          ) : (
            <div
              style={{
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ maxHeight: "90%", width: "90%" }}
                src={explode}
                alt="hit"
              />
            </div>
          )
        )
      )}
    </StyledGridWrapper>
  );
};

export default GridWrapper;
