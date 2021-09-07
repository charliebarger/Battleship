import React, { useState, useEffect } from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";
import isObject from "isobject";
import getFleet from "../helpers/ships";
import SetShips from "./SetShips";
const StyledGameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GameSection = ({
  playerGameboard,
  computerGameboard,
  player,
  computer,
  setGameOver,
}) => {
  const [playerBoard, setPlayerBoard] = useState(playerGameboard.board);
  const [computerBoard, setComputerBoard] = useState(computerGameboard.board);
  const fleet = getFleet();
  fleet[0].selected = true;
  const [myShip, setMyShip] = useState(fleet);

  const checkForGameOver = () => {
    if (computerGameboard.gameOver()) {
      setGameOver(computer.getPlayer());
      return true;
    } else if (playerGameboard.gameOver()) {
      setGameOver(player.getPlayer);
      return true;
    }
    return false;
  };

  const updateGameboard = (gameboard1, gameboard2) => {
    setComputerBoard([...gameboard1]);
    setPlayerBoard([...gameboard2]);
  };

  const hitSpace = (row, column) => {
    computer.autoAttack(playerGameboard);
    computerGameboard.recieveAttack(row, column);
    updateGameboard(computerGameboard.board, playerGameboard.board);
    if (checkForGameOver()) {
      return;
    }
  };

  const changeSelectedShip = (ships) => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].selected) {
        ships[i].selected = false;
        if (ships.length - 1 !== i) {
          let position = i + 1;
          ships[position].selected = true;
          break;
        } else {
          break;
        }
      }
    }
    setMyShip([...ships]);
  };

  const handlePlaceShips = (row, column, ship, temporary) => {
    if (!temporary) {
      removeShip(ship);
      if (playerGameboard.placeShips(row, column, ship)) {
        let changeSelected = myShip;
        changeSelectedShip(changeSelected);
      }
    } else if (playerGameboard.placeShips(row, column, ship)) {
      setPlayerBoard([...playerGameboard.board]);
    }
  };

  const removeShip = (ship) => {
    playerGameboard.board.forEach((item, column) =>
      item.forEach((item, row) => {
        if (isObject(item) && item.shipName.id === ship.id) {
          playerGameboard.board[column][row] = undefined;
        }
      })
    );
    setPlayerBoard([...playerGameboard.board]);
  };

  const handleClickAttack = (item, row, column) => {
    return !item || (isObject(item) && !item.hit)
      ? hitSpace(row, column)
      : false;
  };

  useEffect(() => {
    updateGameboard(computerGameboard.board, playerGameboard.board);
  }, [setComputerBoard, computerGameboard, setPlayerBoard, playerGameboard]);

  return (
    <StyledGameWrapper>
      {myShip.some((ship) => ship.selected) ? (
        <SetShips
          gameboard={playerBoard}
          player={player}
          handleClick={handlePlaceShips}
          ship={myShip.filter((ship) => ship.selected)[0]}
          removeHover={removeShip}
        />
      ) : (
        <>
          <GridWrapper
            player={player}
            gameboard={playerBoard}
            handleClick={() => console.log("hi")}
          />
          <GridWrapper
            player={computer}
            gameboard={computerBoard}
            handleClick={handleClickAttack}
          />
        </>
      )}
    </StyledGameWrapper>
  );
};

export default GameSection;
