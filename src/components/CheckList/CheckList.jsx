import React from "react";
import styled from "styled-components";

import ChecklistLine from "../CheckListLine/CheckListLine";
import AddChecklistItem from "../AddChecklistItem/AddChecklistItem";
import CloseChecklist from "../CloseChecklist/CloseChecklist";

const CheckListModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;
  min-height: 100px;

  padding-top: 40px;
  border: 1px solid var(--white);
  border-radius: 5px;
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
  return (
    <CheckListModalWrapper>
      <AddChecklistItem
        handleChecklistSubmit={props.handleChecklistSubmit}
        item={props.item}
      />
      <ChecklistList>
        {props.item.checklist.map((checklistItem) => {
          return (
            <ChecklistItem key={checklistItem.id}>
              <ChecklistLine
                checklistItem={checklistItem}
                handleAmendCheckTask={props.handleAmendCheckTask}
                handleRemoveCheckItem={props.handleRemoveCheckItem}
                handleChecklistIsDone={props.handleChecklistIsDone}
              />
            </ChecklistItem>
          );
        })}
      </ChecklistList>
      <CloseChecklist handleChecklistClick={props.handleChecklistClick} />
    </CheckListModalWrapper>
  );
};

export default Checklist;
