import React from "react";
import styled from "styled-components";

import ChecklistLine from "../CheckListLine/CheckListLine";

const Checklist = (props) => {
    return (
     <ul>
        {props.item.checklist.map((checklistItem) => {
          return (
            <li>
            <ChecklistLine key={checklistItem.id} checklistItem={checklistItem} handleAmendCheckTask={props.handleAmendCheckTask} handleRemoveCheckItem={props.handleRemoveCheckItem} />
            </li> 
          );
        })}
      </ul>
    );
}

export default Checklist;
