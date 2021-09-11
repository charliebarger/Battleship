import React from "react";
import styled, { css } from "styled-components";
const Button = styled.button`
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

  ${({ bigButton }) =>
    bigButton &&
    css`
      padding: 10px 20px;
      font-size: 32px;
    `}
`;

const StyledButton = ({ children, handleEvent, bigButton }) => {
  console.log(bigButton);
  return (
    <Button onClick={handleEvent} bigButton={bigButton}>
      {children}
    </Button>
  );
};

export default StyledButton;
