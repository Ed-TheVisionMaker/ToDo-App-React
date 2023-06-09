import React from "react";

import ChecklistCheckbox from "../ChecklistCheckbox/ChecklistCheckbox";
import ChecklistInput from "../ChecklistInput/ChecklistInput";
import ChecklistRemoveItem from "../ChecklistRemoveItem/ChecklistRemoveItem";

function ChecklistLine(props) {
  const { checklistItem,
          handleAmendCheckTask,
          handleChecklistIsDone,
          handleChecklistSubmit,
          handleEnableAddCheckItem,
          handleRemoveCheckItem,
          indexOfItem,
          item } = props;

  const id = checklistItem.id;

  return (
    <>
      <ChecklistCheckbox
        checklistItem={checklistItem}
        handleChecklistIsDone={handleChecklistIsDone}
      />
      <ChecklistInput
        checklistItem={checklistItem}
        handleAmendCheckTask={handleAmendCheckTask}
        item={item}
        handleChecklistSubmit={handleChecklistSubmit}
        handleEnableAddCheckItem={handleEnableAddCheckItem}
      />
      <ChecklistRemoveItem
        id={id}
        handleEnableAddCheckItem={handleEnableAddCheckItem}
        handleRemoveCheckItem={handleRemoveCheckItem}
        indexOfItem={indexOfItem}
      />
    </>
  );
};

export default ChecklistLine;
