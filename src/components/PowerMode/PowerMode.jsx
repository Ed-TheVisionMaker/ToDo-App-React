import React from "react";
import { useState } from "react";
import styled from "styled-components";

import ActivatePowerMode from "../ActivatePowerMode/ActivatePowerMode";

const PowerButton = styled.button`
  margin-left: 20px;
  margin-right: 30px;
`;

function PowerMode(props) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePowerMode = () => {
    setIsSelected(!isSelected);
    props.handlePowerSort();
  };
  return (
    <>
      {isSelected && (
        <ActivatePowerMode handleShowPowerTask={props.handleShowPowerTask} />
      )}
      <PowerButton onClick={() => handlePowerMode()}>Power Mode</PowerButton>
    </>
  );
}

export default PowerMode;
