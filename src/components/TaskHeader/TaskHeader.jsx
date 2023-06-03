import React from "react";
import styled from "styled-components";

import SortButton from "../SortButton/SortButton";

const TaskHeaderWrapper = styled.div`
  display: flex;
  font-size: 18px;
`;

const HeaderContainerOne = styled.div`
  display: flex;
  
  width: 70%;

`;

const HeaderContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

const HeaderContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

const TaskDone = styled.h3`
  margin-left: 20px;
  margin-right: 70px;
`;

const TaskItem = styled.h3`
  margin-right: 360px;
`;

const TaskPriority = styled.h3`
  margin-bottom: 10px;
`;

const TaskComplexity = styled.h3`
  margin-bottom: 10px;
`;

// const TaskValueContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 10px;
// `;

const TaskHeader = (props) => {
  return (
    <TaskHeaderWrapper>
      <HeaderContainerOne>
        <TaskDone>Done</TaskDone>
        <TaskItem>Task</TaskItem>
      </HeaderContainerOne>

      <HeaderContainerTwo>
        <TaskPriority>Priority</TaskPriority>
        <SortButton
          list={props.list}
          handleSort={props.handleSort}
          category={"priority"}
        ></SortButton>
      </HeaderContainerTwo>
      <HeaderContainerThree>
        <TaskComplexity>Complexity</TaskComplexity>
        <SortButton
          list={props.list}
          handleSort={props.handleSort}
          category={"complexity"}
        ></SortButton>
      </HeaderContainerThree>
    </TaskHeaderWrapper>
  );
};

export default TaskHeader;
