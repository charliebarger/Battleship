import React, { useState, useEffect } from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";

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
        gameOver={gameOver}
        player={computer}
        game={computerGameboard}
        enemyGame={playerGameboard}
        gameboard={computerBoard}
        enemyGameboard={playerBoard}
        setComputerGameboard={setComputerBoard}
        setPlayerGameboard={setPlayerBoard}
        setGameOver={setGameOver}
      />
    </StyledGameWrapper>
  );
};

export default GameSection;
