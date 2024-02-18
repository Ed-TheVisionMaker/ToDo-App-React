import React from "react";
import styled from "styled-components";

import TaskLine from "../TaskLine/TaskLine";
import TaskHeader from "../TaskHeader/TaskHeader";
import Checklist from "../CheckList/CheckList";

// const TodoContainer = styled.div``;

const TaskListContainer = styled.div`
  width: inherit;

  display: flex;
  justify-content: center;
`;

const TaskListItems = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  list-style-type: none;
  font-size: 16px;
`;

const CheckListModalWrapper = styled.div`
  position: fixed;

  top: 40%;
  // left: calc(50% - 50cqw);
  right: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;
  min-height: 100px;

  border: 1px solid var(--white);
  border-radius: 5px;

  background-color: #242424;

  // attempt to create blur styling for modal;
`;

export default class TaskList extends React.Component {
  state = {
    showModal: false,
    indexOfItem: null,
    newItem: false,
  };

  handleChecklistClick = (item) => {
    const indexOfItem = this.props.list.indexOf(item);
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      indexOfItem: indexOfItem,
    }));
    if(item.checklist.length && item.checklist.filter((checklistItem) => checklistItem.checkTask === null).length) this.setState({ newItem: true })
  };

  handleChecklistClose = () => {
    this.setState({ showModal: false, indexOfItem: null, newItem: false });
  };

  handleDisableAddCheckItem = () => {
    this.setState({ newItem: true });
  };

  handleEnableAddCheckItem = () => {
    this.setState({ newItem: false });
  };

  render() {
    const list = this.props.list;
    const { indexOfItem, showModal } = this.state;
    return (
      <div>
        {list.length > 0 && (
          <TaskHeader
            list={list}
            handleSort={this.props.handleSort}
          />
        )}
        <TaskListContainer>
          <TaskListItems>
            {list.map((item) => {
              return (
                <TaskLine
                  key={item.id}
                  item={item}
                  handleChecklistClick={this.handleChecklistClick}
                  list={list}
                  handleSort={this.props.handleSort}
                  handleIsDone={this.props.handleIsDone}
                  handleChange={this.props.handleChange}
                  handleRemove={this.props.handleRemove}
                  // handleAmendTask={handleAmendTask}
                  // handleChecklistClose={this.handleChecklistClose}
                  handleDateChange={this.props.handleDateChange}
                  handleTaskValues={this.props.handleTaskValues}
                  handlePressEnter={this.props.handlePressEnter}

                />
              );
            })}
          </TaskListItems>
        </TaskListContainer>
        {showModal && (
          <CheckListModalWrapper>
            <Checklist
              item={list[indexOfItem]}
              handleChecklistClose={this.handleChecklistClose}
              indexOfItem={indexOfItem}
              handleDisableAddCheckItem={this.handleDisableAddCheckItem}
              handleEnableAddCheckItem={this.handleEnableAddCheckItem}
              newItem={this.state.newItem}
              {...this.props}
            />
          </CheckListModalWrapper>
        )}
      </div>
    );
  }
}
