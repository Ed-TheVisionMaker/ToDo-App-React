import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import { formatDate } from "react-calendar/dist/cjs/shared/dateFormatter";

// stylng react calendar
// https://dev.to/fitzgeraldkd/react-calendar-with-custom-styles-30c9

const CalendarContainer = styled.div`
  position: absolute;
  z-index: 1;

  .react-calendar__month-view__weekdays__weekday {
    // font-size: 10px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.4;
  }
`;

export default class CalendarDisplay extends React.Component {
  // formatShortWeekDay = (locale,_) => {
    // console.log(date, "locale calendar display");
  //   formatDate(locale, "dd");
  // };

  render() {
    const id = this.props.id;
    const handleClick = this.props.handleClick;
    return (
      <CalendarContainer>
        <Calendar
          onClickDay={(date) =>
            this.props.handleDateChange(id, date, handleClick)
          }
          // formatShortWeekday={this.formatShortWeekDay}
        />
      </CalendarContainer>
    );
  }
}
