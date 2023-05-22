import React from "react";
import styled from "styled-components";

const StyledRemoveButton = styled.button`
  position: relative;

  width: 20px;
  height: 20px;

  margin-left: 20px;
  
  border: 1px solid white;
`;

const StyledRemoveSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  border: 1px solid white;
`;

const RemoveItem = (props) => {
  return (
      <StyledRemoveButton onClick={() => props.handleRemove(props.id)}>
        <StyledRemoveSVG
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </StyledRemoveSVG>
      </StyledRemoveButton>
  );
};

export default RemoveItem;
