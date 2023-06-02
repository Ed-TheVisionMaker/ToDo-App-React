import React from "react";
import styled from "styled-components";

import TaskList from "../TaskList/TaskList";
import RemoveItem from "../RemoveItem/RemoveItem";

const InputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  margin-bottom: 50px;
`;

const TaskInput = styled.input`
  width: 350px;

  padding: 5px 10px;
  font-size: 18px;
`;

const SearchInput = styled.input`
  width: 200px;

  padding: 5px 10px;
  font-size: 18px;
`;

export default class InputItem extends React.Component {
  state = {
    inputValue: "",
    searchValue: "",
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

  handlePressEnter = (e, id, itemAmended) => {
    if (e.key === "Enter") {
      if (id === "inputTask" && !itemAmended) {
        this.handleSubmit(e);
        e.target.value = "";
      }
      else if ((id = "inputAmend")) {
        const newList = this.state.list.map((item) => {
        // console.log(itemAmended, "itemamended", item, "item")

          if (item.id === itemAmended.id) {
            item.task = itemAmended.task;
          }
          return item;
        });
        this.setState({ list: newList });
        e.target.blur()
      }
    }
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
      if (item.id === taskId && category === "priority") {
        item.priority = dropDownItem.value;
      }
      if (item.id === taskId && category === "complexity") {
        item.complexity = dropDownItem.value;
      }
      return item;
    });
    this.setState({ list: newList });
  };

  handleSort = (sortCategory, category, toggleList) => {
    const sortedList = this.state.list.sort((a, b) => {
      if (category === "priority") {
        if (sortCategory === "default") {
          return a.date - b.date;
        }
        if (sortCategory === "ascending") {
          return a.priority - b.priority;
        }
        if (sortCategory === "descending") {
          return b.priority - a.priority;
        }
      }

      if (category === "complexity") {
        if (sortCategory === "default") {
          return a.date - b.date;
        }
        if (sortCategory === "ascending") {
          return a.priority - b.priority;
        }
        if (sortCategory === "descending") {
          return b.priority - a.priority;
        }
      }
    });
    toggleList();
    this.setState({ list: sortedList });
  };

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { list, searchValue } = this.state;
    console.log(this.state, "inputItem");
    const searchedItems = list.filter((item) => {
      return item.task.includes(searchValue);
    });
    return (
      <>
        <InputContainer>
          <form onSubmit={this.handleSubmit}>
            <TaskInput
              id={"inputTask"}
              onChange={this.handleChange}
              onKeyPress={(e) => this.handlePressEnter(e, "inputTask")}
              onBlur={this.handleBlur}
              placeholder="add item"
            />
          </form>
          {/* show difference for just .length and with > than */}
          {this.state.list.length > 0 && (
            <SearchInput
              onChange={this.handleSearch}
              placeholder={"search list"}
            />
          )}
        </InputContainer>
        <TaskList
          list={searchedItems}
          handleAmendTask={this.handleAmendTask}
          handleRemove={this.handleRemove}
          handleIsDone={this.handleIsDone}
          handleTaskValues={this.handleTaskValues}
          handleSort={this.handleSort}
          handlePressEnter={this.handlePressEnter}
        />
      </>
    );
  }
}
