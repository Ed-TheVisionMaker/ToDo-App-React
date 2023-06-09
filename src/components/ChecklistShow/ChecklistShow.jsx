import React from "react";

const ChecklistShow = (props) => {
  const { handleChecklistClick, item } = props;
  const checklistShow = item.checklist.length ? "Checklist" : "Add a checklist";
  return (
    <button onClick={() => handleChecklistClick(item)}>{checklistShow}</button>
  );
};

export default ChecklistShow;
