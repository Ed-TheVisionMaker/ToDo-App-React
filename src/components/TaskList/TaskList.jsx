import React from "react";
import styled from "styled-components";

import TaskLine from "../TaskLine/TaskLine";
import TaskHeader from "../TaskHeader/TaskHeader";

const TodoContainer = styled.div`
  width: 600px;
  border: 1px solid white;
`;

const TaskListContainer = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
`;

const TaskList = (props) => {
  return (
    <TodoContainer>
      <TaskListContainer>
        <TaskHeader list={props.list} handleSort={props.handleSort} />
        <ul>
          {props.list.map((item) => {
            return (
              <TaskLine
                item={item}
                handleAmendTask={props.handleAmendTask}
                handleRemove={props.handleRemove}
                handleIsDone={props.handleIsDone}
                handleTaskValues={props.handleTaskValues}
              />
            );
          })}
        </ul>
      </TaskListContainer>
    </TodoContainer>
  );
};

export default TaskList;
