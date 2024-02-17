import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

import TaskList from '../TaskList/TaskList';
import SearchItems from '../SearchItems/SearchItems';
import PowerMode from '../PowerMode/PowerMode';
import PowerTask from '../PowerTask/PowerTask';

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

function UserInputs() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  // const [sortCategory, setSortCategory] = useState("default");
  const [powerModeActive, setPowerModeActive] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e) => {
    e.target.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      task: inputValue,
      isDone: false,
      priority: 0,
      complexity: 0,
      powerValue: 0,
      date: Date.now(),
      dueDateUnix: null,
      dueDateDisplay: null,
      id: `${Math.random()} * ${Math.random()}`,
      progress: null,
      checklist: [],
    };
    const newList = [...list, newItem];
    setInputValue('');
    setList(newList);
  };

  const handleAmendTask = (itemAmended) => {
    const newList = list.map((item) => {
      if (item.id === itemAmended.id) {
        item.task = itemAmended.task;
      }
      return item;
    });
    setList(newList);
  };

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleIsDone = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setList(newList);
  };

  const handleTaskValues = (taskId, n, category) => {
    const newList = list.map((item) => {
      if (item.id === taskId && category === 'priority') {
        item.priority = n;
        item.powerValue = item.priority + item.complexity;
      }
      if (item.id === taskId && category === 'complexity') {
        item.complexity = n;
        item.powerValue = item.complexity + item.priority;
      }
      return item;
    });
    setList(newList);
  };

  const handleSort = (sortCategory, category, toggleList) => {
    const sortedList = list.sort((a, b) => {
      if (sortCategory === 'asEntered') return a.date - b.date;

      if (sortCategory === 'ascending') {
        if (category === 'priority') return a.priority - b.priority;
        if (category === 'complexity') return a.priority - b.priority;
        if (category === 'dueDate') return a.dueDateUnix - b.dueDateUnix;
      }

      if (sortCategory === 'descending') {
        if (category === 'priority') return b.priority - a.priority;
        if (category === 'complexity') return b.priority - a.priority;
        if (category === 'dueDate') return b.dueDateUnix - a.dueDateUnix;
      }
    });

    toggleList();
    setList(sortedList);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  const handlePowerSort = () => {
    const sortedList = list.sort((a, b) => b.powerValue - a.powerValue);
    setList(sortedList);
  };

  const handleShowPowerTask = () => {
    setPowerModeActive(true);
  };

  const handlePowerFinished = () => {
    setPowerModeActive(false);
  };

  const handleDateChange = (id, date, handleClick) => {
    const monthArray = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = date.getDate().toString().padStart(2, '0');
    const month = monthArray[date.getMonth()];
    const year = date.getFullYear().toString().substring(2);
    const displayDate = day + '/' + month + '/' + year;
    const newList = list.map((item) => {
      if (item.id === id) {
        item.dueDateDisplay = displayDate;
        item.dueDateUnix = date.getTime();
      }
      return item;
    });
    setList(newList);
    handleClick();
  };

  const handleChecklistNewItem = (item, handleDisableAddCheckItem) => {
    const newCheckItem = {
      checkTask: null,
      isDone: false,
      date: Date.now(),
      id: `${Math.random()} * ${Math.random()}`,
    };

    const newChecklist = [...item.checklist, newCheckItem];

    const newList = list.map((listItem) => {
      if (listItem.id === item.id) {
        listItem.checklist = newChecklist;
      }
      return listItem;
    });
    setList(newList);
    handleDisableAddCheckItem();
  };

  const handleChecklistSubmit = (
    e,
    taskItem,
    newChecklistItem,
    value,
    handleEnableAddCheckItem
  ) => {
    e.preventDefault();
    const newList = list.map((item) => {
      if (item.id === taskItem.id) {
        const newChecklist = item.checklist.map((checklistItem) => {
          if (checklistItem.id === newChecklistItem.id) {
            checklistItem.checkTask = value;
          }
          return checklistItem;
        });
        item.checklist = newChecklist;
      }
      return item;
    });
    setList(newList);
    handleEnableAddCheckItem();
  };

  const handleAmendCheckTask = (checkItemAmended) => {
    const newList = list.map((item) => {
      item.checklist.map((checklistItem) => {
        if (checklistItem.id === checkItemAmended.id) {
          checklistItem.task = checkItemAmended.task;
        }
        return checklistItem;
      });

      return item;
    });
    setList(newList);
  };

  const handleRemoveCheckItem = (id, indexOfItem, handleEnableAddCheckItem) => {
    const list = [...this.state.list];
    list[indexOfItem].checklist = list[indexOfItem].checklist.filter(
      (checklistItem) => checklistItem.id !== id
    );
    this.setState({ list });

    if (!list[indexOfItem].checklist.length) handleEnableAddCheckItem();
  };

  const handleChecklistIsDone = (id) => {
    const newList = list.map((item) => {
      const newChecklist = item.checklist.map((checklistItem) => {
        if (checklistItem.id === id) {
          checklistItem.isDone = !checklistItem.isDone;
        }
        return checklistItem;
      });
      item.checklist = newChecklist;
      item.progress =
        (newChecklist.filter((checklistItem) => checklistItem.isDone).length /
          newChecklist.length) *
        100;

      return item;
    });
    setList(newList);
  };

  const searchedItems = list.filter((item) => {
    return item.task.includes(searchValue);
  });

  return (
    <>
      {powerModeActive && (
        <PowerTask list={list} handlePowerFinished={handlePowerFinished} />
      )}
      {!powerModeActive && (
        <TodoContainer>
          <UserInputContainer>
            <PowerModeContainer>
              {(list.length > 0 || searchValue) && (
                <PowerMode
                  handlePowerSort={handlePowerSort}
                  handleShowPowerTask={handleShowPowerTask}
                />
              )}
            </PowerModeContainer>
            <ItemInputSearchContainer>
              <form onSubmit={handleSubmit}>
                <TaskInput
                  id={'inputTask'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='add item'
                  value={inputValue}
                />
              </form>

              {(list.length > 0 || searchValue) && (
                <SearchItems
                  searchValue={searchValue}
                  handleSearch={handleSearch}
                  handleClear={handleClear}
                />
              )}
            </ItemInputSearchContainer>
          </UserInputContainer>
          <TaskList
            list={searchedItems}
            handleAmendTask={handleAmendTask}
            handleDateChange={handleDateChange}
            handleChecklistNewItem={handleChecklistNewItem}
            handleChecklistSubmit={handleChecklistSubmit}
            handleAmendCheckTask={handleAmendCheckTask}
            handleRemoveCheckItem={handleRemoveCheckItem}
            handleChecklistIsDone={handleChecklistIsDone}
            handleRemove={handleRemove}
            handleIsDone={handleIsDone}
            handleTaskValues={handleTaskValues}
            handleSort={handleSort}
          />
        </TodoContainer>
      )}
    </>
  );
}

export default UserInputs;

// export default class UserInputs extends React.Component {
//   state = {
//     list: [],
//     inputValue: "",
//     searchValue: "",
//     sortCategory: "default",
//     powerModeActive: false,
//     mode: "simple",
//   };

//   handleChange = (e) => {
//     this.setState({ inputValue: e.target.value });
//   };

//   handleBlur = (e) => {
//     e.target.value = "";
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const newItem = {
//       task: this.state.inputValue,
//       isDone: false,
//       priority: 0,
//       complexity: 0,
//       powerValue: 0,
//       date: Date.now(),
//       dueDateUnix: null,
//       dueDateDisplay: null,
//       id: `${Math.random()} * ${Math.random()}`,
//       progress: null,
//       checklist: [],
//     };

//     const newList = [...this.state.list, newItem];
//     this.setState({ inputValue: "", list: newList });
//   };

// handleAmendTask = (itemAmended) => {
//   const newList = this.state.list.map((item) => {
//     if (item.id === itemAmended.id) {
//       item.task = itemAmended.task;
//     }
//     return item;
//   });
//   this.setState({ list: newList });
// };

// handleRemove = (id) => {
//   const newList = this.state.list.filter((item) => item.id !== id);
//   this.setState({ list: newList });
// };

// handleIsDone = (id) => {
//   const newList = this.state.list.map((item) => {
//     if (item.id === id) {
//       item.isDone = !item.isDone;
//     }
//     return item;
//   });
//   this.setState({ list: newList });
// };

// handleTaskValues = (taskId, n, category) => {
//   const newList = this.state.list.map((item) => {
//     if (item.id === taskId && category === "priority") {
//       item.priority = n;
//       item.powerValue = item.priority + item.complexity;
//     }
//     if (item.id === taskId && category === "complexity") {
//       item.complexity = n;
//       item.powerValue = item.complexity + item.priority;
//     }
//     return item;
//   });
//   this.setState({ list: newList });
// };

// handleSort = (sortCategory, category, toggleList) => {
//   const sortedList = this.state.list.sort((a, b) => {
//     if (sortCategory === "asEntered") return a.date - b.date;

//     if (sortCategory === "ascending") {
//       if (category === "priority") return a.priority - b.priority;
//       if (category === "complexity") return a.priority - b.priority;
//       if (category === "dueDate") return a.dueDateUnix - b.dueDateUnix;
//     }

//     if (sortCategory === "descending") {
//       if (category === "priority") return b.priority - a.priority;
//       if (category === "complexity") return b.priority - a.priority;
//       if (category === "dueDate") return b.dueDateUnix - a.dueDateUnix;
//     }
//   });

//   toggleList();
//   this.setState({ list: sortedList });
// };

// handleSearch = (e) => {
//   this.setState({ searchValue: e.target.value });
// };

// handleClear = () => {
//   this.setState({ searchValue: "" });
// };

// handlePowerSort = () => {
//   const sortedList = this.state.list.sort(
//     (a, b) => b.powerValue - a.powerValue
//   );
//   this.setState({ list: sortedList });
// };

// handleShowPowerTask = () => {
//   this.setState({ powerModeActive: true });
// };

// handlePowerFinished = () => {
//   this.setState({ powerModeActive: false });
// };

// handleMode = () => {
//   const mode = this.state.mode;
//   if (mode === "simple") this.setState({ mode: "detailed" });
//   if (mode === "detailed") this.setState({ mode: "simple" });
// };

// handleDateChange = (id, date, handleClick) => {
//   const monthArray = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const day = date.getDate().toString().padStart(2, "0");
//   const month = monthArray[date.getMonth()];
//   const year = date.getFullYear().toString().substring(2);
//   const displayDate = day + "/" + month + "/" + year;
//   const newList = this.state.list.map((item) => {
//     if (item.id === id) {
//       item.dueDateDisplay = displayDate;
//       item.dueDateUnix = date.getTime();
//     }
//     return item;
//   });
//   this.setState({ list: newList });
//   handleClick();
// };

// handleChecklistNewItem = (item, handleDisableAddCheckItem) => {
//   const newCheckItem = {
//     checkTask: null,
//     isDone: false,
//     date: Date.now(),
//     id: `${Math.random()} * ${Math.random()}`,
//   };

//   const newChecklist = [...item.checklist, newCheckItem];

//   const newList = this.state.list.map((listItem) => {
//     if (listItem.id === item.id) {
//       listItem.checklist = newChecklist;
//     }
//     return listItem;
//   });
//   this.setState({ list: newList });
//   handleDisableAddCheckItem();
// };

// handleChecklistSubmit = (e, taskItem, newChecklistItem, value, handleEnableAddCheckItem) => {
//   e.preventDefault();
//   const newList = this.state.list.map((item) => {
//     if (item.id === taskItem.id) {
//       const newChecklist = item.checklist.map((checklistItem) => {
//         if (checklistItem.id === newChecklistItem.id) {
//           checklistItem.checkTask = value;
//         }
//         return checklistItem;
//       });
//       item.checklist = newChecklist;
//     }
//     return item;
//   });
//   this.setState({ list: newList });
//   handleEnableAddCheckItem();
// };

// handleAmendCheckTask = (checkItemAmended) => {
//   const newList = this.state.list.map((item) => {
//     item.checklist.map((checklistItem) => {
//       if (checklistItem.id === checkItemAmended.id) {
//         checklistItem.task = checkItemAmended.task;
//       }
//       return checklistItem;
//     });

//     return item;
//   });
//   this.setState({ list: newList });
// };

// handleRemoveCheckItem = (id, indexOfItem, handleEnableAddCheckItem) => {
//   const list = [...this.state.list];
//   list[indexOfItem].checklist = list[indexOfItem].checklist.filter(
//     (checklistItem) => checklistItem.id !== id
//   );
//   this.setState({ list });

//   if(!list[indexOfItem].checklist.length) handleEnableAddCheckItem();
// };

// handleChecklistIsDone = (id) => {
//   const newList = this.state.list.map((item) => {
//     const newChecklist = item.checklist.map((checklistItem) => {
//       if (checklistItem.id === id) {
//         checklistItem.isDone = !checklistItem.isDone;
//       }
//       return checklistItem;
//     });
//     item.checklist = newChecklist;
//     item.progress =
//       (newChecklist.filter((checklistItem) => checklistItem.isDone).length / newChecklist.length) *
//       100;

//     return item;
//   });
//   this.setState({ list: newList });
// };

// render() {
// console.log(this.state.list, "state list in UserInput")
// const { list, mode, powerModeActive, searchValue } = this.state;
//     const searchedItems = list.filter((item) => {
//       return item.task.includes(searchValue);
//     });
//     return (
//       <>
//         {powerModeActive && (
//           <PowerTask
//             list={list}
//             handlePowerFinished={this.handlePowerFinished}
//           />
//         )}
//         {!powerModeActive && (
//           <TodoContainer>
//             <UserInputContainer>
//               <PowerModeContainer>
//                 {(this.state.list.length > 0 || this.state.searchValue) && (
//                   <PowerMode
//                     handlePowerSort={this.handlePowerSort}
//                     handleShowPowerTask={this.handleShowPowerTask}
//                   />
//                 )}
//               </PowerModeContainer>
//               <ItemInputSearchContainer>
//                 <form onSubmit={this.handleSubmit}>
//                   <TaskInput
//                     id={"inputTask"}
//                     onChange={this.handleChange}
//                     onBlur={this.handleBlur}
//                     placeholder="add item"
//                     value={this.state.inputValue}
//                   />
//                 </form>

//                 {(this.state.list.length > 0 || this.state.searchValue) && (
//                   <SearchItems
//                     searchValue={searchValue}
//                     handleSearch={this.handleSearch}
//                     handleClear={this.handleClear}
//                   />
//                 )}
//               </ItemInputSearchContainer>
//             </UserInputContainer>
//             <TaskList list={searchedItems} {...this} />
//           </TodoContainer>
//         )}
//         <Mode handleMode={this.handleMode} mode={mode} />
//       </>
//     );
//   }
// }
// //
