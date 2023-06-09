import React from "react";
import styled from "styled-components";

const PowerTaskContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ClosePowerTaskButton = styled.button`
  height: 50px;
  margin-left: 50px;
`;

const PowerTask = (props) => {
  const powerItem = props.list.find((item) => !item.isDone);
  const task = powerItem.task;
  return (
    <PowerTaskContainer>
      <h1>{task}</h1>
      <ClosePowerTaskButton onClick={() => props.handlePowerFinished()}>
        Done
      </ClosePowerTaskButton>
    </PowerTaskContainer>
  );
};

export default PowerTask;
