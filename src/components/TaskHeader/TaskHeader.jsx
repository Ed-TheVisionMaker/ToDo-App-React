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

  width: 10%;
`;

const HeaderContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

const HeaderContainerFour = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

const TaskDone = styled.h3`
  margin-left: 20px;
  margin-right: 70px;
`;

const TaskDueDate = styled.h3`
  margin-bottom: 10px;
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

const TaskHeader = (props) => {
  const { handleSort, list } = props;
  return (
    <TaskHeaderWrapper>
      <HeaderContainerOne>
        <TaskDone>Done</TaskDone>
        <TaskItem>Task</TaskItem>
      </HeaderContainerOne>
      <HeaderContainerTwo>
        <TaskDueDate>Due</TaskDueDate>
        <SortButton
          list={list}
          handleSort={handleSort}
          category={"dueDate"}
        ></SortButton>
      </HeaderContainerTwo>
      <HeaderContainerThree>
        <TaskPriority>Priority</TaskPriority>
        <SortButton
          list={list}
          handleSort={handleSort}
          category={"priority"}
        ></SortButton>
      </HeaderContainerThree>
      <HeaderContainerFour>
        <TaskComplexity>Complexity</TaskComplexity>
        <SortButton
          list={list}
          handleSort={handleSort}
          category={"complexity"}
        ></SortButton>
      </HeaderContainerFour>
    </TaskHeaderWrapper>
  );
};

export default TaskHeader;
