import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.button`
  width: 20px;
  height: 20px;
`;

const StyledCheckboxSVG = styled.svg`
  width: 20px;
  height: 20px;
  background-color: white;
`;

const Checkbox = (props) => {
  const isDone = props.isDone;
  return (
    <StyledCheckbox onClick={() => props.handleIsDone(props.id)}>
      {isDone && (
        <StyledCheckboxSVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </StyledCheckboxSVG>
      )}
    </StyledCheckbox>
  );
};

export default Checkbox;
