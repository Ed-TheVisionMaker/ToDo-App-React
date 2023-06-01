import React from "react";

import TaskList from "../TaskList/TaskList";
import RemoveItem from "../RemoveItem/RemoveItem";

export default class InputItem extends React.Component {
  state = {
    inputValue: "",
    list: [],
    sortCategory: "default",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleBlur = (e) => {
    e.target.value = "";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      task: this.state.inputValue,
      isDone: false,
      priority: 0,
      complexity: 0,
      date: Date.now(),
      id: `${Math.random()} * ${Math.random()}`,
    };

    const newList = [...this.state.list, newItem];
    this.setState({ inputValue: "", list: newList });
  };

  handleAmendTask = (itemAmended) => {
    const newList = this.state.list.map((item) => {
      if (item.id === itemAmended.id) {
        item.task = itemAmended.task;
      }
      return item;
    });
    this.setState({ list: newList });
  };

  handleRemove = (id) => {
    const newList = this.state.list.filter((item) => item.id !== id);
    this.setState({ list: newList });
  };

  handleIsDone = (id) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    this.setState({ list: newList });
  };

  handleTaskValues = (taskId, dropDownItem, category) => {
    const newList = this.state.list.map((item) => {
      if(item.id === taskId && category === "priority") {
        item.priority = dropDownItem.value;
      }
      if(item.id === taskId && category === "complexity") {
        item.complexity = dropDownItem.value;
      }
      return item;
    });
    this.setState({ list: newList })
  }

  handleSort = (sortCategory, category, toggleList) => {
    const sortedList = this.state.list.sort((a, b) => {
      if(category === "priority") {
        if(sortCategory === "default") {
          return a.date - b.date;
        }
        if(sortCategory === "ascending") {
           return a.priority - b.priority;
        } 
        if(sortCategory === "descending") {
          return b.priority - a.priority;
        }
      }
      
      if(category === "complexity") {
        if(sortCategory === "default") {
          return a.date - b.date;
        }
        if(sortCategory === "ascending") {
          return a.priority - b.priority;
        }
        if(sortCategory === "descending") {
          return  b.priority - a.priority;
        }
      }
    })
    toggleList();
    console.log(sortedList, "sorted List in input items")
    this.setState({ list: sortedList })
  }


  render() {
    // console.log(this.state.list);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder="add to your list here"
          />
        </form>
        <TaskList
          list={this.state.list}
          handleAmendTask={this.handleAmendTask}
          handleRemove={this.handleRemove}
          handleIsDone={this.handleIsDone}
          handleTaskValues={this.handleTaskValues}
          handleSort={this.handleSort}
        />
      </>
    );
  }
}
