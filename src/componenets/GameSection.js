import React from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";

const StyledGameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GameSection = ({
  computerGameboard,
  playerGameboard,
  handleClick,
  computerGamez,
}) => {
  console.log(computerGamez);
  return (
    <StyledGameWrapper>
      <GridWrapper
        gameboard={playerGameboard}
        enemyGameboard={computerGameboard}
      />
      <GridWrapper
        gameboard={computerGameboard}
        enemyGameboard={playerGameboard}
      />
    </StyledGameWrapper>
  );
};

export default GameSection;
