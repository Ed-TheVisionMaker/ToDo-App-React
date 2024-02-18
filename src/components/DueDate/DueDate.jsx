import React from "react";
import { useState } from "react";
import styled from "styled-components";

import CalendarDisplay from "../CalendarDisplay/CalendarDisplay";

const DueDateContainer = styled.div`
  position: relative;

  color: var(--white);
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
function DueDate(props) {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  const { dueDateDisplay, handleDateChange, id } = props;

  return (
    <DueDateContainer>
      <DueDateText onClick={() => handleClick()}>
        {dueDateDisplay || "Date"}
      </DueDateText>
      {showCalendar && (
        <CalendarDisplay
          id={id}
          handleDateChange={handleDateChange}
          handleClick={handleClick}
        />
      )}
    </DueDateContainer>
  );
}

export default DueDate;
