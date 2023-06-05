import React from "react";
import styled from "styled-components";

// when the button is pressed a new object is create

const AddCheckListButton = styled.button``;

export default class CheckListAdd extends React.Component {
  render() {
    const item = this.props.item
    return (
        <AddCheckListButton  onClick={() => this.props.handleChecklistSubmit(item)}>+</AddCheckListButton>
    );
  }
}
