import React from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox/Checkbox";
import RemoveItem from "../RemoveItem/RemoveItem";
import Dropdown from "../Dropdown/Dropdown";

const StyledListItem = styled.li`
  display: flex;
  align-items: center;

  font-size: 18px;

  padding-top: 10px;
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  width: 400px;

  border-radius: 5px;
  border: 1px solid white;
  padding: 5px 0 5px 10px;
`

const StyledInput = styled.input`
  width: 290px;

  font-size: 18px;
  color: black;
  background-color: white;

  margin-right: 100px;
  border-radius: 5px;
`;

const StyledItemSpan = styled.span`
  width: 100%;

  margin-right: 100px;
`;

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

    if (!isOpen) this.setState({ isOpen: true });
    if (isOpen) {
      this.setState({ isOpen: false });
      itemAmended.task = newTask;
      this.props.handleAmendTask(itemAmended);
    }
  };

  render() {
    const item = this.props.item;
    const { complexity, id, isDone, priority, task } = this.props.item;
    const isOpen = this.state.isOpen;
    return (
      <>
        <StyledListItem key={id}>
          <Checkbox
            id={id}
            isDone={isDone}
            handleIsDone={this.props.handleIsDone}
          />
          <TextContainer>
          {isOpen && (
            <StyledInput
            id={"inputAmend"}
              onBlur={this.handleClick}
              defaultValue={task}
              onChange={this.handleChange}
              onKeyPress={(e) => this.props.handlePressEnter(e,"inputAmend", item )}
            />
          )}
          {!isOpen && (
            <StyledItemSpan onClick={this.handleClick}>{task}</StyledItemSpan>
          )}
          </TextContainer>
          <RemoveItem
            id={id}
            handleChange={this.props.handleChange}
            handleRemove={this.props.handleRemove}
          />
          <Dropdown
            handleTaskValues={this.props.handleTaskValues}
            id={id}
            category={"priority"}
          />
          <Dropdown handleTaskValues={this.props.handleTaskValues} id={id} category={"complexity"}/>
        </StyledListItem>
      </>
    );
  }
}

export default TaskLine;
