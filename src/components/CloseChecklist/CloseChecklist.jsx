import React from "react";
import styled from "styled-components";

const CloseButton = styled.button`
position: absolute;
top: 10px;
right: 10px;

padding: 5px 10px;
`

const CloseChecklist = (props) => {
  return <CloseButton onClick={() => props.handleChecklistClose()}>Close</CloseButton>;
};

export default CloseChecklist;
