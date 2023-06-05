import React from "react";

import ChecklistCheckbox from "../ChecklistCheckbox/ChecklistCheckbox";
import ChecklistInput from "../ChecklistInput/ChecklistInput";
import ChecklistRemoveItem from "../ChecklistRemoveItem/ChecklistRemoveItem";

export default class ChecklistLine extends React.Component {
  state = {
    inputValue: "",
    isOpen: false,
  };

  render() {
    const checklistItem = this.props.checklistItem;
    const id = this.props.checklistItem.id;
    return (
      <>
        <ChecklistCheckbox checklistItem={checklistItem} handleChecklistIsDone={this.props.handleChecklistIsDone} />
        <ChecklistInput
          checklistItem={checklistItem}
          handleAmendCheckTask={this.props.handleAmendCheckTask}
        />
        <ChecklistRemoveItem id={id} handleRemoveCheckItem={this.props.handleRemoveCheckItem} />
      </>
    );
  }
}
