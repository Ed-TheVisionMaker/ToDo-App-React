import React from "react";

import Checkbox from "../Checkbox/Checkbox";
import RemoveItem from "../RemoveItem/RemoveItem";


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
        <Checkbox id={id} isDone={isDone} handleIsDone={this.props.handleIsDone} />
        <li key={id}>
          {isOpen && (
            <input
              onBlur={this.handleClick}
              defaultValue={task}
              onChange={this.handleChange}
            />
          )}
          {!isOpen && (
            <span onClick={this.handleClick}>
              {task}
            </span>
          )}
        </li>
        <RemoveItem id={id} handleChange={this.props.handleChange} handleRemove={this.props.handleRemove}/>
      </>
    );
  }
}

export default TaskLine;
