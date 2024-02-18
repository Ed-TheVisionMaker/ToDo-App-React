import React from "react";
import styled from "styled-components";

const RemoveButton = styled.button`
  position: relative;

  width: 30px;
  height: 30px;

  margin-left: 30px;
  padding: 5px;
  border-radius: 10px;
  border: 0;

  background-color: transparent;
`;

const RemoveSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  width: 30px;
  height: 30px;

  border-radius: 10px;
`;

const RemoveItem = (props) => {
  const { handleRemove, id, indexOfItem } = props;
  return (
    <RemoveButton onClick={() => handleRemove(id, indexOfItem)}>
      <RemoveSVG
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
      </RemoveSVG>
    </RemoveButton>
  );
};

export default RemoveItem;
