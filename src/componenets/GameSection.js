import React, { useState, useEffect } from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";
import isObject from "isobject";
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

  const hitSpace = (row, column) => {
    computer.autoAttack(playerGameboard);
    computerGameboard.recieveAttack(row, column);
    if (computerGameboard.gameOver()) {
      setGameOver(true);
      return;
    } else if (playerGameboard.gameOver()) {
      setGameOver(true);
      return;
    }
    setComputerBoard([...computerGameboard.board]);
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
      <GridWrapper
        gameboard={playerBoard}
        player={player}
        game={playerGameboard}
      />
      <GridWrapper
        player={computer}
        gameboard={computerBoard}
        handleClick={handleClickAttack}
      />
    </StyledGameWrapper>
  );
};

export default GameSection;
