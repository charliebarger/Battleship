import React from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";

const StyledGameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GameSection = (props) => {
  return (
    <StyledGameWrapper>
      <GridWrapper {...props} />
      <GridWrapper {...props} />
    </StyledGameWrapper>
  );
};

export default GameSection;
