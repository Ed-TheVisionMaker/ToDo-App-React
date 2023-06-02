import React from "react";
import styled from "styled-components";

import TaskLine from "../TaskLine/TaskLine";
import TaskHeader from "../TaskHeader/TaskHeader";

const TodoContainer = styled.div``;

const TaskListContainer = styled.div`
  width: inherit;

  display: flex;
  justify-content: center;
`;

const ListUnordered = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  list-style-type: none;
  font-size: 16px;
`;

// create divs of fixed width percentages and the same for the headers so they match.

const TaskList = (props) => {
  return (
    <TodoContainer>
      {props.list.length > 0 && (
        <TaskHeader list={props.list} handleSort={props.handleSort} />
      )}
      <TaskListContainer>
        <ListUnordered>
          {props.list.map((item) => {
            return (
              <TaskLine
                key={item.id}
                item={item}
                handleAmendTask={props.handleAmendTask}
                handleRemove={props.handleRemove}
                handleIsDone={props.handleIsDone}
                handleTaskValues={props.handleTaskValues}
                handlePressEnter={props.handlePressEnter}
              />
            );
          })}
        </ListUnordered>
      </TaskListContainer>
    </TodoContainer>
  );
};

export default TaskList;
