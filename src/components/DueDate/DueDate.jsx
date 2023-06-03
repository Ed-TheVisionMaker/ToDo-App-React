import React from "react";
import styled from "styled-components";

import CalendarDisplay from "../CalendarDisplay/CalendarDisplay";

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
    return (
      <div>
        <div onClick={() => this.handleClick()}>DueDate</div>
        {showCalendar && <CalendarDisplay id={id} handleDateChange={this.props.handleDateChange} />}
      </div>
    );
  }
}
