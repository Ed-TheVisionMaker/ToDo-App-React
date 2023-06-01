import React from "react";
import styled from "styled-components";

import SortButton from "../SortButton/SortButton";

const TaskHeaderWrapper = styled.div`
display: flex;
font-size: 18px;


`
const TaskDone = styled.h3`
margin-left: 20px;
margin-right: 70px;

`

const TaskItem = styled.h3`
margin-right: 360px;

`

const TaskDelete = styled.h3`
margin-right: 20px;

`

const TaskPriority = styled.h3`

`

const TaskComplexity = styled.h3`

`

const TaskValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;

`

const TaskHeader = (props) => {
    return (
        <TaskHeaderWrapper>
                <TaskDone>Done</TaskDone>
                <TaskItem>Task</TaskItem>
                <TaskDelete>Delete</TaskDelete>
                <TaskValueContainer>
                <TaskPriority>Priority</TaskPriority>
                <SortButton list={props.list} handleSort={props.handleSort} category={"priority"} ></SortButton>
                </TaskValueContainer>
                <TaskValueContainer>
                <TaskComplexity>Complexity</TaskComplexity>
                <SortButton list={props.list} handleSort={props.handleSort} category={"complexity"} ></SortButton>
                </TaskValueContainer>
        </TaskHeaderWrapper>
    )
}

export default TaskHeader