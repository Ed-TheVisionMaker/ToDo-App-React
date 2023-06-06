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
  };
//FIXME
// the index of item is only showing index 0, and it is not being defined for use in the handleSubmit of the checklist

  handleChecklistClick = (item) => {
    const indexOfItem = this.props.list.indexOf(item);
    console.log(indexOfItem, "indexOfItem in handleChecklistClick, Tasklist")
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      indexOfItem: indexOfItem,
    }));
  };

  handleChecklistClose = () => {
    this.setState({ showModal: false, indexOfItem: null,
     })
  }

  render() {
  
    const list = this.props.list;
    const { indexOfItem, showModal } = this.state;
    return (
      <div>
        {this.props.list.length > 0 && (
          <TaskHeader
            list={this.props.list}
            handleSort={this.props.handleSort}
          />
        )}
        <TaskListContainer>
          <TaskListItems>
            {this.props.list.map((item) => {
              return (
                <TaskLine
                  key={item.id}
                  item={item}
                  handleChecklistClick={this.handleChecklistClick}
                  {...this.props}
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
              indexofItem={indexOfItem}
              {...this.props}
            />
          </CheckListModalWrapper>
        )}
      </div>
    );
  }
}