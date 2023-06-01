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
  justify-content: center;
`;

const ListUnordered = styled.ul`
  width: inherit;

  display: flex;
  flex-direction: column;

  list-style-type: none;

  border: 1px solid blue;

`;

const TaskList = (props) => {
  return (
    <TodoContainer>
      <TaskHeader list={props.list} handleSort={props.handleSort} />
      <TaskListContainer>
        <ListUnordered>
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
        </ListUnordered>
      </TaskListContainer>
    </TodoContainer>
  );
};

export default TaskList;
