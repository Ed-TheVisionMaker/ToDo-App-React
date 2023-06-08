import React from "react";
import styled from "styled-components";

import ChecklistLine from "../CheckListLine/CheckListLine";
import AddChecklistItem from "../AddChecklistItem/AddChecklistItem";
import CloseChecklist from "../CloseChecklist/CloseChecklist";

const ChecklistContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: inherit;
  height: inherit;

  padding-top: 40px;
`;

const ChecklistList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
`;

const ChecklistItem = styled.li`
  display: flex;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 20px;
`;

export default class Checklist extends React.Component {
  // state = {
  //   newItem: false,
  // };

  // handleDisableAddCheckItem = () => {
  //     this.setState({ newItem: true })
  // }

  // componentWillUnmount = () => {
  //   console.log("checklist unmounted")
  // }
  
  render() {
    return (
      <ChecklistContainer>
        <AddChecklistItem
          handleDisableAddCheckItem={this.props.handleDisableAddCheckItem}
          handleChecklistNewItem={this.props.handleChecklistNewItem}
          item={this.props.item}
          newItem={this.props.newItem}
        />
        <ChecklistList>
          {this.props.item.checklist.map((checklistItem) => {
            return (
              <ChecklistItem key={checklistItem.id}>
                <ChecklistLine checklistItem={checklistItem} {...this.props} />
              </ChecklistItem>
            );
          })}
        </ChecklistList>
        <CloseChecklist
          handleChecklistClose={this.props.handleChecklistClose}
          handleEnableAddCheckItem={this.props.handleEnableAddCheckItem}
        />
      </ChecklistContainer>
    );
  }
}
