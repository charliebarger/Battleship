import React from "react";
import GridWrapper from "./GridWrapper";
import styled from "styled-components";

const StyledGameWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GameSection = ({ gridRows, gridColumns }) => {
  console.log(gridRows, gridColumns);
  return (
    <StyledGameWrapper>
      <GridWrapper gridRows={gridRows} gridColumns={gridColumns} />
      <GridWrapper gridRows={gridRows} gridColumns={gridColumns} />
    </StyledGameWrapper>
  );
};

export default GameSection;
