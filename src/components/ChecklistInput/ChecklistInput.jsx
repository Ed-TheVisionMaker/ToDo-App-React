import React from "react";
import styled from "styled-components";

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

  margin-right: 100px;
  border-radius: 5px;
`;

const StyledItemSpan = styled.span`
  width: inherit;
  height: inherit;

  margin-right: 100px;
`;

export default class ChecklistInput extends React.Component {
  state = {
    inputValue: "",
    isOpen: false,
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    const {isOpen, inputValue} = this.state
    const checkItemAmended = this.props.checklistItem;
    const checkTask = this.props.checklistItem.checkTask;

    if (!isOpen) this.setState({ isOpen: true });
    if (isOpen || !checkTask) {
      console.log(checkTask, "checkTask ChekclistINput");
      this.setState({ isOpen: false });
      checkItemAmended.checkTask = inputValue;
      this.props.handleAmendCheckTask(checkItemAmended);
    }
  };

  render() {
    const {isOpen, inputValue} = this.state;
    const checkTask = this.props.checklistItem.checkTask;
    const {checklistItem, item} = this.props;
    return (
      <TextContainer>
        {(isOpen || !checkTask ) && (
          //TODO: is this necessary having the form as the item is already submitted with AddChecklistItem?
          // <form onSubmit={(e) => this.props.handleChecklistSubmit(e, item, checklistItem, inputValue)}>
          <form>
            <StyledInput
              defaultValue={checkTask}
              onChange={this.handleChange}
              onBlur={this.handleClick}
            />
          </form>
        )}
        {!isOpen && (
          <StyledItemSpan onClick={this.handleClick}>
            {checkTask}
          </StyledItemSpan>
        )}
      </TextContainer>
    );
  }
}
