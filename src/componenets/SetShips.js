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

const RotateButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  font-size: 22px;
  background: transparent;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(-45deg, red, #fae900);
  background-color: white;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px 5px #000000;
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
