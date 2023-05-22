import React from "react";

import TaskLine from "../TaskLine/TaskLine";

const TaskList = (props) => {
    return (
        <ul>
        {props.list.map(item => {
            return (
                <TaskLine item={item} handleAmendTask={props.handleAmendTask} handleRemove={props.handleRemove}/>
            )
        })}
    </ul>
    )
}

export default TaskList;