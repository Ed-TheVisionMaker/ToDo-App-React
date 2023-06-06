import React from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox/Checkbox";
import RemoveItem from "../RemoveItem/RemoveItem";
import Dropdown from "../Dropdown/Dropdown";
import DueDate from "../DueDate/DueDate";
import Checklist from "../CheckList/CheckList";
import CheckListAdd from "../AddChecklistItem/AddChecklistItem";
import ChecklistShow from "../ChecklistShow/ChecklistShow";

const ItemContainerOne = styled.div`
  display: flex;
  align-items: center;

  width: 70%;
`;

const ItemContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 10%;
`;

const ItemContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

const ItemContainerFour = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

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
`;

const StyledInput = styled.input`
  width: 290px;

  font-size: 18px;
  color: black;
  background-color: white;

  box-sizing: border-box;
  margin-right: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const StyledItemSpan = styled.span`
  display: block;
  width: 290px;

  margin-right: 100px;
  margin-bottom: 10px;

`;

class TaskLine extends React.Component {
  state = {
    inputValue: "",
    isOpen: false,
    // showChecklist: false,
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
    const { dueDate, id, isDone, task } = this.props.item;
    const isOpen = this.state.isOpen;
    // const showChecklist = this.state.showChecklist;
    return (
      <>
        <StyledListItem key={id}>
          <ItemContainerOne>
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
                  onKeyPress={(e) =>
                    this.props.handlePressEnter(e, "inputAmend", item)
                  }
                />
              )}
              {!isOpen && (
                <StyledItemSpan onClick={this.handleClick}>
                  {task}
                </StyledItemSpan>
              )}
              <ChecklistShow item={item} handleChecklistClick={this.props.handleChecklistClick} />
            </TextContainer>
            <RemoveItem
              id={id}
              handleChange={this.props.handleChange}
              handleRemove={this.props.handleRemove}
            />
          </ItemContainerOne>
          <ItemContainerTwo>
            <DueDate
              dueDate={dueDate}
              id={id}
              handleDateChange={this.props.handleDateChange}
            />
          </ItemContainerTwo>
          <ItemContainerThree>
            <Dropdown
              item={item}
              handleTaskValues={this.props.handleTaskValues}
              id={id}
              category={"priority"}
            />
          </ItemContainerThree>
          <ItemContainerFour>
            <Dropdown
              item={item}
              handleTaskValues={this.props.handleTaskValues}
              id={id}
              category={"complexity"}
            />
          </ItemContainerFour>
        </StyledListItem>
        {/* {showChecklist && <Checklist
          item={item}
          handleAmendCheckTask={this.props.handleAmendCheckTask}
          handleRemoveCheckItem={this.props.handleRemoveCheckItem}
          handleChecklistIsDone={this.props.handleChecklistIsDone}
          handleChecklistSubmit={this.props.handleChecklistSubmit}
          handleChecklistClick={this.handleChecklistClick}
        />} */}
      </>
    );
  }
}

export default TaskLine;
