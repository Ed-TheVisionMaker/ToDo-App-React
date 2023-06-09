import React from "react";
import styled from "styled-components";

import ChecklistLine from "../CheckListLine/CheckListLine";
import AddChecklistItem from "../AddChecklistItem/AddChecklistItem";
import CloseChecklist from "../CloseChecklist/CloseChecklist";

const ChecklistContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: inherit;
  height: inherit;

  padding-top: 40px;
`;

const ChecklistList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
`;

const ChecklistItem = styled.li`
  display: flex;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 20px;
`;

const Checklist = (props) => {
  const { handleChecklistNewItem, handleDisableAddCheckItem, item, newItem } =
    props;
  return (
    <ChecklistContainer>
      <AddChecklistItem
        handleDisableAddCheckItem={handleDisableAddCheckItem}
        handleChecklistNewItem={handleChecklistNewItem}
        item={item}
        newItem={newItem}
      />
      <ChecklistList>
        {item.checklist.map((checklistItem) => {
          return (
            <ChecklistItem key={checklistItem.id}>
              <ChecklistLine checklistItem={checklistItem} {...props} />
            </ChecklistItem>
          );
        })}
      </ChecklistList>
      <CloseChecklist
        handleChecklistClose={props.handleChecklistClose}
        handleEnableAddCheckItem={props.handleEnableAddCheckItem}
      />
    </ChecklistContainer>
  );
};

export default Checklist;
