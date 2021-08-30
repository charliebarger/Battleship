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
  console.log(playerGameboard, computerGameboard, computer);
  const [playerBoard, setPlayerBoard] = useState(playerGameboard.board);
  const [computerBoard, setComputerBoard] = useState(computerGameboard.board);
  return (
    <StyledGameWrapper>
      {/* <GridWrapper
        player={player}
        gamboard={playerGame}
        // gameboard={playerGameboard}
        // enemyGameboard={computerGameboard}
      /> */}
      <GridWrapper
        player={computer}
        game={playerGameboard}
        enemyGame={playerBoard}
        gameboard={computerBoard}
        enemyGameboard={computerBoard}
        setComputerGameboard={setComputerBoard}
        setPlayerGameboard={setPlayerBoard}
      />
    </StyledGameWrapper>
  );
};

export default GameSection;
