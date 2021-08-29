import React from "react";
import styled from "styled-components";

const StyledGridWrapper = styled.div`
  border: black solid 2px;
  background: black;
  height: 400px;
  min-width: 400px;
  display: grid;
  grid-gap: 2px;
  grid-template:
    repeat(${(props) => props.gridRows}, 1fr) /
    repeat(${(props) => props.gridColumns}, 1fr);
`;

const StyledGridItem = styled.div`
  background-color: white;
  &:hover {
    background-color: red;
  }
`;
const GridWrapper = ({ gridRows, gridColumns, playerSquares }) => {
  return (
    <StyledGridWrapper gridColumns={gridColumns} gridRows={gridRows}>
      {playerSquares.map((row) => row.map((item) => <StyledGridItem />))}
    </StyledGridWrapper>
  );
};

export default GridWrapper;
