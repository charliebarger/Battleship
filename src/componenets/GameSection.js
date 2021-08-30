import React, { useState } from "react";
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
}) => {
  const [playerBoard, setPlayerBoard] = useState(playerGameboard.board);
  const [computerBoard, setComputerBoard] = useState(computerGameboard.board);
  return (
    <StyledGameWrapper>
      <GridWrapper gameboard={playerBoard} player={player} />
      <GridWrapper
        player={computer}
        game={computerGameboard}
        enemyGame={playerGameboard}
        gameboard={computerBoard}
        enemyGameboard={playerBoard}
        setComputerGameboard={setComputerBoard}
        setPlayerGameboard={setPlayerBoard}
      />
    </StyledGameWrapper>
  );
};

export default GameSection;
