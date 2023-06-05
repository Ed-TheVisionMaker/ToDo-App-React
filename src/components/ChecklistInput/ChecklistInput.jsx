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
  width: 100%;

  margin-right: 100px;
`;

export default class ChecklistInput extends React.Component {
    state = {
        inputValue: "",
        isOpen: false,
    }

    handleChange = (e) => {
      this.setState({ inputValue: e.target.value })

    }

    handleClick = () => {
      const isOpen = this.state.isOpen;
      const checkItemAmended = this.props.checklistItem;
      const newTask = this.state.inputValue;
  
      if (!isOpen) this.setState({ isOpen: true });
      if (isOpen) {
        this.setState({ isOpen: false });
        checkItemAmended.checkTask = newTask;
        this.props.handleAmendCheckTask(checkItemAmended); 
      }
    };

    render() {
        const isOpen = this.state.isOpen;
        const checkTask = this.props.checklistItem.checkTask;
        return (
            <TextContainer>
            {isOpen && (
              <StyledInput
                defaultValue={checkTask}
                onChange={this.handleChange}
                onBlur={this.handleClick}
                />
            )}
            {!isOpen && (
              <StyledItemSpan onClick={this.handleClick}>
                {checkTask}
              </StyledItemSpan>
            )}
          </TextContainer>
        )
    }
}