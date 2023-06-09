import React from "react";
import styled from "styled-components";

const CheckboxButton = styled.button`
  position: relative;

  box-sizing: border-box;
  width: 25px;
  height: 25px;

  margin-left: 35px;
  margin-right: 70px;
`;

const CheckboxSVG = styled.svg`
  position: absolute;
  top: -2px;
  left: -2px;

  box-sizing: border-box;
  width: 25px;
  height: 25px;

  color: black;
  background-color: white;
  border-radius: 5px;
`;

const Checkbox = (props) => {
  const { handleIsDone, id, isDone } = props;
  return (
    <CheckboxButton onClick={() => handleIsDone(id)}>
      {isDone && (
        <CheckboxSVG
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
        </CheckboxSVG>
      )}
    </CheckboxButton>
  );
};

export default Checkbox;
