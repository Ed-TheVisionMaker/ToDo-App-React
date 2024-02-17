import { useEffect, useState } from "react";
import styled from "styled-components";

import Checkbox from "../Checkbox/Checkbox";
import RemoveItem from "../RemoveItem/RemoveItem";
import Dropdown from "../Dropdown/Dropdown";
import DueDate from "../DueDate/DueDate";
import ChecklistShow from "../ChecklistShow/ChecklistShow";
import ProgressBar from "../ProgressBar/ProgressBar";

const ItemContainerOne = styled.div`
  display: flex;
  align-items: center;

  width: 70%;
`;

const ItemContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 10%;
`;

const ItemContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

const ItemContainerFour = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  font-size: 18px;

  padding-top: 10px;
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  width: 400px;

  border-radius: 5px;
  border: 1px solid white;
  padding: 5px 10px;
`;

const Input = styled.input`
  width: 290px;

  font-size: 18px;
  color: black;
  background-color: white;

  box-sizing: border-box;
  margin-right: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ItemSpan = styled.span`
  display: block;
  width: 290px;

  margin-right: 100px;
  margin-bottom: 10px;
`;

function TaskLine(props) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const item = props.item;
  const { checklist, dueDateDisplay, id, isDone, progress } = item
  let task = item.task

  useEffect(() => {
    setInputValue(task)
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };
  
  const handleClick = (e) => {
    if (!isOpen) setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
      task = inputValue;
      props.handleAmendTask(item);
    }
  };

  return (
    <>
      <ListItem key={id}>
        <ItemContainerOne>
          <Checkbox
            id={id}
            isDone={isDone}
            handleIsDone={props.handleIsDone}
          />
          <TextContainer>
            <ProgressBar checklist={checklist} progress={progress} />
            {isOpen && (
              <Input
                id={"inputAmend"}
                onBlur={handleClick}
                defaultValue={task}
                onChange={handleChange}
                onKeyPress={(e) =>
                  props.handlePressEnter(e, "inputAmend", item)
                }
              />
            )}
            {!isOpen && (
              <ItemSpan onClick={handleClick}>{task}</ItemSpan>
            )}
            <ChecklistShow
              item={item}
              handleChecklistClick={props.handleChecklistClick}
            />
          </TextContainer>
          <RemoveItem
            id={id}
            handleChange={props.handleChange}
            handleRemove={props.handleRemove}
          />
        </ItemContainerOne>
        <ItemContainerTwo>
          <DueDate
            dueDateDisplay={dueDateDisplay}
            id={id}
            handleDateChange={props.handleDateChange}
          />
        </ItemContainerTwo>
        <ItemContainerThree>
          <Dropdown
            item={item}
            handleTaskValues={props.handleTaskValues}
            id={id}
            category={"priority"}
          />
        </ItemContainerThree>
        <ItemContainerFour>
          <Dropdown
            item={item}
            handleTaskValues={props.handleTaskValues}
            id={id}
            category={"complexity"}
          />
        </ItemContainerFour>
      </ListItem>
    </>
  );
};

export default TaskLine;
