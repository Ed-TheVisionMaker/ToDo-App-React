import React from "react";
import styled from "styled-components";

// when the button is pressed a new object is create

const AddToChecklist = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 0 auto;

  padding: 5px 10px;
`;


export default class AddChecklistItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <AddToChecklist onClick={() => this.props.handleChecklistNewItem(item)}>
        Add item
      </AddToChecklist>
    );
  }
}
