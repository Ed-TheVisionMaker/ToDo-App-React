import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  width: 400px;

  border-radius: 5px;
  border: 1px solid white;
  padding: 5px 0 5px 10px;
`;

const Input = styled.input`
  width: 290px;

  font-size: 18px;
  color: black;
  background-color: white;

  margin-right: 100px;
  border-radius: 5px;
`;

const ItemSpan = styled.span`
  width: inherit;
  height: inherit;

  margin-right: 100px;
`;

function ChecklistInput(props) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleClick = () => {
    const checkItemAmended = props.checklistItem;
    const checkTask = props.checklistItem.checkTask;

    if (!isOpen) setIsOpen(true);

    if (isOpen || !checkTask) {
      setIsOpen(false);
      checkItemAmended.checkTask = inputValue;
      props.handleAmendCheckTask(checkItemAmended);
      props.handleEnableAddCheckItem();
    }
  };

  const checkTask = props.checklistItem.checkTask;
  const {
    handleChecklistSubmit,
    handleEnableAddCheckItem,
    checklistItem,
    item,
  } = props;
  
  return (
    <TextContainer>
      {(isOpen || !checkTask) && (
        <form
          onSubmit={(e) =>
            handleChecklistSubmit(
              e,
              item,
              checklistItem,
              inputValue,
              handleEnableAddCheckItem
            )
          }
        >
          <Input
            defaultValue={checkTask}
            onChange={handleChange}
            onBlur={handleClick}
          />
        </form>
      )}
      {!isOpen && (
        <ItemSpan onClick={handleClick}>
          {checkTask}
        </ItemSpan>
      )}
    </TextContainer>
  );
}

export default ChecklistInput;
