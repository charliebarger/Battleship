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
  gameOver,
}) => {
  const [playerBoard, setPlayerBoard] = useState(playerGameboard.board);
  const [computerBoard, setComputerBoard] = useState(computerGameboard.board);
  const fleet = getFleet();
  fleet[0].selected = true;
  const [myShip, setMyShip] = useState(fleet);

  const hitSpace = (row, column) => {
    computer.autoAttack(playerGameboard);
    computerGameboard.recieveAttack(row, column);
    if (computerGameboard.gameOver()) {
      setGameOver(computer.getPlayer());
      return;
    } else if (playerGameboard.gameOver()) {
      setGameOver(player.getPlayer);
      return;
    }
    setComputerBoard([...computerGameboard.board]);
    setPlayerBoard([...playerGameboard.board]);
  };

  const handlePlaceShips = (row, column, ship, temporary) => {
    if (!temporary) {
      removeShip(ship);
      if (playerGameboard.placeShips(row, column, ship)) {
        let changeSelected = myShip;
        for (let i = 0; i < changeSelected.length; i++) {
          if (changeSelected[i].selected) {
            changeSelected[i].selected = false;
            if (changeSelected.length - 1 === i) {
              break;
            } else {
              let position = i + 1;
              changeSelected[position].selected = true;
              break;
            }
          }
        }
        setMyShip([...changeSelected]);
      }
    }
    console.log(row, column, ship);
    if (playerGameboard.placeShips(row, column, ship)) {
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
    playerGameboard.ships = [];
    setPlayerBoard([...playerGameboard.board]);
  };

  const handleClickAttack = (item, row, column) => {
    return !item || (isObject(item) && !item.hit)
      ? hitSpace(row, column)
      : false;
  };

  useEffect(() => {
    setComputerBoard(computerGameboard.board);
    setPlayerBoard(playerGameboard.board);
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
