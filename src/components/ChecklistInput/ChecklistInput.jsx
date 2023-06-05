import React from "react";
import styled from "styled-components";

export default class ChecklistInput extends React.Component {
    state = {
        isOpen: false,
    }

    render() {
        const isOpen = this.state.isOpen;
        return (
            <TextContainer>
            {isOpen && (
              <StyledInput
                id={"inputAmend"}
                onBlur={this.handleClick}
                defaultValue={task}
                onChange={this.handleChange}
              />
            )}
            {!isOpen && (
              <StyledItemSpan onClick={this.handleClick}>
                {task}
              </StyledItemSpan>
            )}
          </TextContainer>
        )
    }
}