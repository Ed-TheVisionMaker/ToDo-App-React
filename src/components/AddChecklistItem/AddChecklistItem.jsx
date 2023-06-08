import React from "react";
import styled from "styled-components";

const AddToChecklist = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0 auto;

  padding: 5px 10px;

  &:disabled {
    cursor: not-allowed;
  }

`;

export default class AddChecklistItem extends React.Component {
  render() {
    const { handleDisableAddCheckItem, item, newItem } = this.props;
  console.log(newItem, "newItem in AddChecklistitem")
    return (
      <AddToChecklist disabled={newItem} onClick={() => this.props.handleChecklistNewItem(item, handleDisableAddCheckItem)}>
        Add item
      </AddToChecklist>
    );
  }
}
