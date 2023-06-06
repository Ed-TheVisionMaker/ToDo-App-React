import React from "react";

const ChecklistShow = (props) =>  {
    const item = props.item;
    const checklistShow = props.item.checklist.length ? "Checklist" : "Add a checklist";
    return <button onClick={() => props.handleChecklistClick(item)}>{checklistShow}</button>
}

export default ChecklistShow;
