import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

const CalendarContainer = styled.div`
  position: absolute;
  z-index: 1;

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.4;
  }
`;

const CalendarDisplay = (props) => {
  const { handleClick, handleDateChange, id } = props;
  return (
    <CalendarContainer>
      <Calendar
        onClickDay={(date) => handleDateChange(id, date, handleClick)}
      />
    </CalendarContainer>
  );
};

export default CalendarDisplay;
