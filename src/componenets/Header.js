import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  background: white;
  margin-bottom: 60px;
  background: #266691;
  background: radial-gradient(
    circle,
    rgba(38, 102, 145, 1) 41%,
    rgba(14, 160, 190, 1) 100%
  );
  box-shadow: 5px 5px 15px 5px #000000;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-family: "Big Shoulders Stencil Text", cursive;
  letter-spacing: 5px;
`;

const Header = () => {
  return <StyledHeader>BATTLESHIP</StyledHeader>;
};

export default Header;
