import React from "react";
import styled from "styled-components";

const TaskHeaderWrapper = styled.div`
display: flex;
font-size: 12px;

`
const TaskDone = styled.h3`

`

const TaskItem = styled.h3`
margin-right: 130px;

`

const TaskDelete = styled.h3`
margin-right: 20px;

`

const TaskPriority = styled.h3`

`

const TaskHeader = () => {
    return (
        <TaskHeaderWrapper>
                <TaskDone>Done</TaskDone>
                <TaskItem>Task</TaskItem>
                <TaskDelete>Delete</TaskDelete>
                <TaskPriority>Priority</TaskPriority>
        </TaskHeaderWrapper>
    )
}

export default TaskHeader