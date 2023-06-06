import React from "react";

const ChecklistShow = (props) =>  {
    const checklistShow = props.item.checklist.length ? "Checklist" : "Add a checklist";
    return <button onClick={() => props.handleChecklistClick()}>{checklistShow}</button>
}

export default ChecklistShow;
