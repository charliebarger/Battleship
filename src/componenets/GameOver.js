import React from "react";
import StyledButton from "./StyledButton";
import styled from "styled-components";

const BodyWrapper = styled.div`
  font-size: 55px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const ResetWrapper = styled.div`
  font-family: "Big Shoulders Stencil Text", cursive;
  box-shadow: 5px 5px 15px 5px #000000;
  height: 300px;
  width: 400px;
  background: white;
  border: #266691 solid 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.25s;

  @media ${({ theme }) => theme.mediaQueries["below500"]} {
    height: 225px;
    width: 300px;
  }

  * {
    font-size: 20px;
  }
`;

const GameOver = ({ handleClick, player }) => {
  return (
    <BodyWrapper>
      <ResetWrapper>
        <span style={{ fontSize: "55px", marginBottom: "40px" }}>
          {player === "player" ? "You Lost" : "You Won"}!
        </span>
        <StyledButton bigButton={true} handleEvent={() => handleClick(false)}>
          Play Again
        </StyledButton>
      </ResetWrapper>
    </BodyWrapper>
  );
};

export default GameOver;
