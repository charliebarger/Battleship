import React from "react";
import styled, { css, keyframes } from "styled-components";
import { isObject } from "../helpers/helpers";
import explode from "../images/explosion.png";

const StyledGridWrapper = styled.div`
  margin-top: 10px;
  ${({ placeShips }) =>
    placeShips &&
    css`
      @media ${({ theme }) => theme.mediaQueries["below650"]} {
        height: 350px;
        min-width: 350px;
        max-width: 350px;
      }
    `}
  z-index:0;
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
  ${({ placeShips }) =>
    !placeShips &&
    css`
      @media ${({ theme }) => theme.mediaQueries["below900"]} {
        height: 350px;
        min-width: 350px;
        max-width: 350px;
      }

      @media ${({ theme }) => theme.mediaQueries["below750"]} {
        height: 300px;
        min-width: 300px;
        max-width: 300px;
      }

      @media ${({ theme }) => theme.mediaQueries["below650"]} {
        height: 350px;
        min-width: 350px;
        max-width: 350px;
      }
    `}

  @media ${({ theme }) => theme.mediaQueries["below500"]} {
    height: 300px;
    min-width: 300px;
    max-width: 300px;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.5);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7)
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(.7);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const StyledGridItem = styled.div`
  background-image: url(${explode});
  object-fit: contain;
  transition: ${({ placingShips }) => (placingShips ? "0s" : "1s")};
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color, sunkShip }) => (sunkShip ? "red" : color)};
  ${({ border }) =>
    border &&
    css`
      border: 2px solid ${border};
    `}
  ${({ player, color }) =>
    player === "computer" &&
    color === "white" &&
    css`
      &:hover {
        cursor: pointer;
        &::before {
          content: "";
          display: block;
          position: absolute;
          height: 70%;
          width: 70%;
          left: 15%;
          top: 15%;
          border-radius: 100px;
          z-index: 1;
          background: red;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
          animation: ${pulse} 1.5s infinite;
        }
      }
    `}
`;

const SpanHeader = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
  font-family: "Big Shoulders Stencil Text", cursive;
  color: white;
`;

const GridWrapper = ({
  gameboard,
  player,
  handleClick,
  ship,
  removeHover,
  cssClass,
  noHeader,
}) => {
  function getColor(item) {
    let color;
    let border;
    if (isObject(item)) {
      if (player.getPlayer() === "player" || item.hit) {
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
    <div
      style={{
        transform: player.getPlayer() === "player" ? "scale(0.9)" : "none",
      }}
    >
      {!noHeader && (
        <SpanHeader>
          {player.getPlayer() === "player" ? "My" : "Enemy"} Board
        </SpanHeader>
      )}
      <StyledGridWrapper
        gridColumns={gameboard[0].length}
        gridRows={gameboard.length}
        player={player.getPlayer()}
        placeShips={removeHover}
        className={cssClass ? cssClass : undefined}
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
                player={player.getPlayer()}
                item={item}
                color={getColor(item).color}
                border={getColor(item).border}
                placingShips={removeHover}
              />
            ) : (
              <StyledGridItem
                player={player.getPlayer()}
                sunkShip={item.shipName.isSunk()}
                color={getColor(item).color}
                border={getColor(item).border}
              >
                <img
                  style={{ maxHeight: "90%", width: "90%" }}
                  src={explode}
                  alt="hit"
                />
              </StyledGridItem>
            )
          )
        )}
      </StyledGridWrapper>
    </div>
  );
};

export default GridWrapper;
