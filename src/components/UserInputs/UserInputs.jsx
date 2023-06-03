import React from "react";
import styled from "styled-components";

import TaskList from "../TaskList/TaskList";
import SearchItems from "../SearchItems/SearchItems";
import PowerMode from "../PowerMode/PowerMode";
import PowerTask from "../PowerTask/PowerTask";
import Mode from "../Mode/Mode";

const TodoContainer = styled.div`
  width: 100%;
`;

const UserInputContainer = styled.div`
  display: flex;

  margin-bottom: 50px;
`;

const PowerModeContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 30%;
`;

const ItemInputSearchContainer = styled.div`
  width: 70%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TaskInput = styled.input`
  width: 350px;

  padding: 5px 10px;
  font-size: 18px;
`;

export default class UserInputs extends React.Component {
  state = {
    list: [],
    inputValue: "",
    searchValue: "",
    sortCategory: "default",
    powerModeActive: false,
    mode: "simple",
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
      powerValue: 0,
      date: Date.now(),
      dueDate: null,
      id: `${Math.random()} * ${Math.random()}`,
      checkList: [],
    };

    const newList = [...this.state.list, newItem];
    this.setState({ inputValue: "", list: newList });
  };

  handlePressEnter = (e, id, itemAmended) => {
    if (e.key === "Enter") {
      if (id === "inputTask" && !itemAmended) {
        this.handleSubmit(e);
        e.target.value = "";
      } else if ((id = "inputAmend")) {
        const newList = this.state.list.map((item) => {
          if (item.id === itemAmended.id) {
            item.task = itemAmended.task;
          }
          return item;
        });
        this.setState({ list: newList });
        e.target.blur();
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

  handleTaskValues = (taskId, n, category) => {
    const newList = this.state.list.map((item) => {
      if (item.id === taskId && category === "priority") {
        item.priority = n;
        item.powerValue = item.priority + item.complexity;
      }
      if (item.id === taskId && category === "complexity") {
        item.complexity = n;
        item.powerValue = item.complexity + item.priority;
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

  handleClear = () => {
    this.setState({ searchValue: "" });
  };

  handlePowerSort = () => {
    const sortedList = this.state.list.sort(
      (a, b) => b.powerValue - a.powerValue
    );
    this.setState({ list: sortedList });
  };

  handleShowPowerTask = () => {
    this.setState({ powerModeActive: true });
  };

  handlePowerFinished = () => {
    this.setState({ powerModeActive: false });
  };

  handleMode = () => {
    const mode = this.state.mode;
    if (mode === "simple") this.setState({ mode: "detailed" });
    if (mode === "detailed") this.setState({ mode: "simple" });
  };

  handleDateChange = (id, date) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        item.dueDate = date;
      }
      return item;
    });
    this.setState({ list: newList });
  };

  render() {
    console.log(this.state, "dueDate userInput")
    const { list, mode, powerModeActive, searchValue } = this.state;
    const searchedItems = list.filter((item) => {
      return item.task.includes(searchValue);
    });
    return (
      <>
        {powerModeActive && (
          <PowerTask
            list={list}
            handlePowerFinished={this.handlePowerFinished}
          />
        )}
        {!powerModeActive && (
          <TodoContainer>
            <UserInputContainer>
              <PowerModeContainer>
                {(this.state.list.length > 0 || this.state.searchValue) && (
                  <PowerMode
                    handlePowerSort={this.handlePowerSort}
                    handleShowPowerTask={this.handleShowPowerTask}
                  />
                )}
              </PowerModeContainer>
              <ItemInputSearchContainer>
                <form onSubmit={this.handleSubmit}>
                  <TaskInput
                    id={"inputTask"}
                    onChange={this.handleChange}
                    onKeyPress={(e) => this.handlePressEnter(e, "inputTask")}
                    onBlur={this.handleBlur}
                    placeholder="add item"
                  />
                </form>
                {(this.state.list.length > 0 || this.state.searchValue) && (
                  <SearchItems
                    list={list}
                    searchValue={searchValue}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                  />
                )}
              </ItemInputSearchContainer>
            </UserInputContainer>
            <TaskList
              list={searchedItems}
              handleAmendTask={this.handleAmendTask}
              handleRemove={this.handleRemove}
              handleIsDone={this.handleIsDone}
              handleTaskValues={this.handleTaskValues}
              handleSort={this.handleSort}
              handlePressEnter={this.handlePressEnter}
              handleDateChange={this.handleDateChange}
            />
          </TodoContainer>
        )}
        <Mode handleMode={this.handleMode} mode={mode} />
      </>
    );
  }
}
