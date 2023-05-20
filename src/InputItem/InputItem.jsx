import React from "react";
import TaskList from "../TaskList/TaskList";

export default class InputItem extends React.Component {
  state = {
    inputValue: "",
    list: [],
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleBlur = (e) => {
    e.target.value = "";
}

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        task: this.state.inputValue,
        isDone: false,
        priority: 0,
        complexity: 0,
        data: Date.now(),
        id: `${Math.random()} * ${Math.random()}`,
    }
    const newList = [...this.state.list, newItem];
    this.setState({ inputValue: "", list: newList });
  }

  handleAmendTask = (itemAmended) => {
    const newList = this.state.list.map(item => {
      if (item.id === itemAmended.id) {
        item.task = itemAmended.task;
      }
      return item
    })
    this.setState({ list: newList })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} onBlur={this.handleBlur} placeholder="add to your list here" />
        </form>
        <TaskList list={this.state.list} handleAmendTask={this.handleAmendTask} />
      </>
    );
  }
}
