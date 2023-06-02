import React from "react";
import styled from "styled-components";

const ActivateButton = styled.button``;

const ActivatePowerMode = (props) => {
  return (
    <ActivateButton onClick={() => props.handleShowPowerTask()}>
      Activate
    </ActivateButton>
  );
};

export default ActivatePowerMode;
