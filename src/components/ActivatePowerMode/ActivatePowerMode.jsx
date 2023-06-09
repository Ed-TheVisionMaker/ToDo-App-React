import React from "react";

const ActivatePowerMode = (props) => {
  return (
    <button onClick={() => props.handleShowPowerTask()}>
      Activate
    </button>
  );
};

export default ActivatePowerMode;
