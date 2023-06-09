import React from "react";
import styled from "styled-components";

const PowerTaskContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PowerTaskItem = styled.h1``;

const ClosePowerTaskButton = styled.button`
  height: 50px;
  margin-left: 50px;
`;

const PowerTask = (props) => {
  const powerItem = props.list.find((item) => !item.isDone);
  const task = powerItem.task;
  return (
    <PowerTaskContainer>
      <PowerTaskItem>{task}</PowerTaskItem>
      <ClosePowerTaskButton onClick={() => props.handlePowerFinished()}>
        Done
      </ClosePowerTaskButton>
    </PowerTaskContainer>
  );
};

export default PowerTask;
