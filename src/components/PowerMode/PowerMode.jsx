import React from "react";
import styled from "styled-components";

import ActivatePowerMode from "../ActivatePowerMode/ActivatePowerMode";

const PowerButton = styled.button`
  margin-left: 20px;
  margin-right: 30px;
`;

export default class PowerMode extends React.Component {
  state = {
    isSelected: false,
  };

  handlePowerMode = () => {
    this.setState((prevState) => ({
      isSelected: !prevState.isSelected,
    }));

    this.props.handlePowerSort();
  };


  render() {
    const isSelected = this.state.isSelected;
    return (
      <>
        {isSelected && (
          <ActivatePowerMode handleShowPowerTask={this.props.handleShowPowerTask} />
        )}
        <PowerButton onClick={() => this.handlePowerMode()}>
          Power Mode
        </PowerButton>
      </>
    );
  }
}
