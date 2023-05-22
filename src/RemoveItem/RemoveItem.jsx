import React from "react";
import styled from "styled-components";

const styledRemoveButton = styled.button`
  background-color: white;
  width: 20px;
  height: 20px;
  border: 1px solid white;
`;
const styledRemoveSVG = styled.svg`
  width: 20px;
  height: 20px;
  border: 1px solid white;
`;
const RemoveItem = (props) => {
  return (
    <styledRemoveButton onClick={props.handleRemove(props.id)}>
      <styledRemoveSVG
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
      </styledRemoveSVG>
    </styledRemoveButton>
  );
};

export default RemoveItem;
