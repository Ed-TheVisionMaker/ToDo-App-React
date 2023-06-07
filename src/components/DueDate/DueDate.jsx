import React from "react";
import styled from "styled-components";

import CalendarDisplay from "../CalendarDisplay/CalendarDisplay";

const DueDateContainer = styled.div`
  position: relative;

  color: var(--white)
`;

const DueDateText = styled.div`
  display: flex;
  text-align: center;

  font-size: 18px;
  padding: 5px 10px;

  border: 1px solid transparent;

  &:hover {
    color: #797979;
    border: 1px solid #797979;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default class DueDate extends React.Component {
  state = {
    showCalendar: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({ showCalendar: !prevState.showCalendar }));
  };

  render() {
    const showCalendar = this.state.showCalendar;
    const id = this.props.id;
    const dueDateDisplay = this.props.dueDateDisplay;
    return (
      <DueDateContainer>
        <DueDateText onClick={() => this.handleClick()}>
          {dueDateDisplay || "Date"}
        </DueDateText>
        {showCalendar && (
          <CalendarDisplay
            id={id}
            handleDateChange={this.props.handleDateChange}
            handleClick={this.handleClick}
          />
        )}
      </DueDateContainer>
    );
  }
}
