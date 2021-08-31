import React, { useState } from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";

const StyledGameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GameSection = ({ computerGameboard, playerGameboard, player }) => {
  const [playerBoard, setPlayerBoard] = useState(playerGameboard.board);
  const [computerBoard, setComputerBoard] = useState(computerGameboard.board);
  return (
    <StyledGameWrapper>
      <GridWrapper
        player={player.getPlayer()}
        gameboard={playerGameboard}
        enemyGameboard={computerGameboard}
      />
      <GridWrapper
        playerBoard={playerBoard}
        computerBoard={computerBoard}
        setComputerGameboard={setComputerBoard}
        setPlayerGameboard={setPlayerBoard}
        gameboard={computerGameboard}
        enemyGameboard={playerGameboard}
      />
    </StyledGameWrapper>
  );
};

export default GameSection;
