import React from "react";
import styled from "styled-components";

const StyledGridWrapper = styled.div`
  border: black solid 2px;
  height: 400px;
  min-width: 400px;
  display: grid;
  grid-template:
    repeat(${(props) => props.gridRows}, 1fr) /
    repeat(${(props) => props.gridColumns}, 1fr);
`;
const GridWrapper = () => {
  return (
    <StyledGridWrapper gridColumns={10} gridRows={10}>
      <div></div>
    </StyledGridWrapper>
  );
};

export default GridWrapper;
