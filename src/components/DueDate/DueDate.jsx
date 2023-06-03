import React from "react";
import styled from "styled-components";

import CalendarDisplay from "../CalendarDisplay/CalendarDisplay";

const DueDateContainer = styled.div`
    position: relative;

`

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
    const dueDate = this.props.dueDate;
    return (
      <DueDateContainer>
        <div onClick={() => this.handleClick()}>{dueDate || "Due Date"}</div>
        {showCalendar && <CalendarDisplay id={id} handleDateChange={this.props.handleDateChange} handleClick={this.handleClick} />}
      </DueDateContainer>
    );
  }
}
