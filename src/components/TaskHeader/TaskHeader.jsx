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

const TaskComplexity = styled.h3`

`

const TaskValueContainer = styled.div`

`

const SortButton = styled.button`

`

const TaskHeader = (props) => {
    return (
        <TaskHeaderWrapper>
                <TaskDone>Done</TaskDone>
                <TaskItem>Task</TaskItem>
                <TaskDelete>Delete</TaskDelete>
                <TaskValueContainer>
                <TaskPriority>Priority</TaskPriority>
                <SortButton></SortButton>
                </TaskValueContainer>
                <TaskValueContainer>
                <TaskComplexity>Complexity</TaskComplexity>
                <SortButton></SortButton>
                </TaskValueContainer>
        </TaskHeaderWrapper>
    )
}

export default TaskHeader