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
      progress: null,
      checklist: [],
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

  handleDateChange = (id, date, handleClick) => {
    const monthArray = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = monthArray[date.getMonth()];
    const year = date.getFullYear().toString().substring(2);
    const displayDate = day + "/" + month + "/" + year;
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        item.dueDate = displayDate;
      }
      return item;
    });
    this.setState({ list: newList });
    handleClick();
  };

  handleChecklistNewItem = (item) => {
    const newCheckItem = {
      checkTask: "",
      isDone: false,
      date: Date.now(),
      id: `${Math.random()} * ${Math.random()}`,
    };

    const newChecklist = [...item.checklist, newCheckItem];

    const newList = this.state.list.map((listItem) => {
      if (listItem.id === item.id) {
        listItem.checklist = newChecklist;
      }
      return listItem;
    });
    this.setState({ list: newList });
  };


  //FIXME
  // submit is re-rendering - is it because it is called? Have to change how the values is submitted
  // item[indexofTaskItem] is undefined

  handleChecklistSubmit = (e, value, indexOfTaskItem, checklistAmended) => {
    // console.log(e, "a", value, "b", indexOfTaskItem, "c", checklistAmended, "d")
    // how do you change the state for a nested object?

    // const newChecklist = this.state.item[indexOfTaskItem].checklist.map(
    //   (checklistItem) => {
    //     if (checklistItem.id === checklistAmended.id) {
    //       checklistItem.checkTask = value;
    //     }
    //     return checklistItem;
    //   });
      // this.setState({ list[indexOfTaskItem] : newChecklist})

    e.preventDefault();
      const newList = this.state.list.map((item) => {
        if(item.id === item[indexOfTaskItem].id) {
          const newChecklist = item.map((checklistItem) => {
            if(checklistItem.id === checklistAmended.id) {
              checklistItem.checkTask = value;
            }
            return checklistItem;
          })
        }
        return newList;
      })
      this.setState({ list: newList })
  };

  handleAmendCheckTask = (checkItemAmended) => {
    // is this slow for performance? better to pass the item so only have to map the checklist?
    const newList = this.state.list.map((item) => {
      item.checklist.map((checklistItem) => {
        if (checklistItem.id === checkItemAmended.id) {
          checklistItem.task = checkItemAmended.task;
        }
        return checklistItem;
      });

      return item;
    });
    this.setState({ list: newList });
  };

  handleRemoveCheckItem = (id) => {
    const newList = this.state.list.map((item) => {
      const newChecklist = item.checklist.filter(
        (checkItem) => checkItem.id !== id
      );
      item.checklist = newChecklist;
      return item;
    });
    this.setState({ list: newList });
  };

  handleChecklistIsDone = (id) => {
    const newList = this.state.list.map((item) => {
      const newChecklist = item.checklist.map((checklistItem) => {
        if (checklistItem.id === id) {
          checklistItem.isDone = !checklistItem.isDone;
        }
        return checklistItem;
      });
      item.checklist = newChecklist;
      item.progress =
        (newChecklist.filter((el) => el.isDone).length / newChecklist.length) *
        100;

      return item;
    });
    this.setState({ list: newList });
  };

  render() {
    console.log(this.state.list, "state list in UserInput")
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
                    onBlur={this.handleBlur}
                    placeholder="add item"
                    value={this.state.inputValue}
                  />
                </form>

                <SearchItems
                  searchValue={searchValue}
                  handleSearch={this.handleSearch}
                  handleClear={this.handleClear}
                />
              </ItemInputSearchContainer>
            </UserInputContainer>
            <TaskList list={searchedItems} {...this} />
          </TodoContainer>
        )}
        <Mode handleMode={this.handleMode} mode={mode} />
      </>
    );
  }
}
