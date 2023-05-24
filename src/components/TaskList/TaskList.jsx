import React from "react";

import TaskLine from "../TaskLine/TaskLine";
import TaskHeader from "../TaskHeader/TaskHeader";

const TaskList = (props) => {
  return (
    <>
    <TaskHeader />
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
    </>
  );
};

export default TaskList;
