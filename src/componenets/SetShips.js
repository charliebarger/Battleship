import React from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";
import StyledButton from "./StyledButton";
const GridLabel = styled.h2`
  color: white;
  font-size: 32px;
  margin: 0px;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  * {
    font-family: "Big Shoulders Stencil Text", cursive;
    letter-spacing: 2.5px;
  }
`;

const SetShips = ({ gameboard, player, handleClick, ship, removeHover }) => {
  return (
    <div>
      <LabelWrapper>
        <GridLabel>My Fleet</GridLabel>
        <StyledButton handleEvent={ship.toggleRotate}>Rotate</StyledButton>
      </LabelWrapper>
      <GridWrapper
        gameboard={gameboard}
        player={player}
        handleClick={handleClick}
        ship={ship}
        removeHover={removeHover}
        noHeader
      />
    </div>
  );
};

export default SetShips;
