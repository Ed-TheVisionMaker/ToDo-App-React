import React from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox/Checkbox";
import RemoveItem from "../RemoveItem/RemoveItem";
import Dropdown from "../Dropdown/Dropdown";

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledInput = styled.input`
  // max-width: 150ch;

  margin-right: 100px;

  background-color: blue;
`
const StyledItemSpan = styled.span `
  width: 150px;

`

class TaskLine extends React.Component {
  state = {
    inputValue: "",
    isOpen: false,
  };

  componentDidMount() {
    const task = this.props.item.task;
    this.setState({ inputValue: task });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = (e) => {
    const isOpen = this.state.isOpen;
    const itemAmended = this.props.item;
    const newTask = this.state.inputValue;
    
    if(!isOpen) this.setState({ isOpen: true });
    if(isOpen) {
        this.setState({ isOpen: false });
        itemAmended.task = newTask;
        this.props.handleAmendTask(itemAmended)
    }
  };

  render() {
    const { complexity, id, isDone, priority, task } = this.props.item;
    const isOpen = this.state.isOpen;
    return (
      <>
        <StyledListItem key={id}>
        <Checkbox id={id} isDone={isDone} handleIsDone={this.props.handleIsDone} />
          {isOpen && (
            <StyledInput
              onBlur={this.handleClick}
              defaultValue={task}
              onChange={this.handleChange}
            />
          )}
          {!isOpen && (
            <StyledItemSpan onClick={this.handleClick}>
              {task}
            </StyledItemSpan>
          )}
        <RemoveItem id={id} handleChange={this.props.handleChange} handleRemove={this.props.handleRemove}/>
        <Dropdown handleTaskValues={this.props.handleTaskValues} id={id} category={"priority"}/>
        {/* <Dropdown handleTaskValues={this.props.handleTaskValues} id={id} category={"complexity"}/> */}
        </StyledListItem>
      </>
    );
  }
}

export default TaskLine;
