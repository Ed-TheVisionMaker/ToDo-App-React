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
    console.log(this.props.indexOfItem, "index of item, in checklistLine")
    return (
      <>
        <ChecklistCheckbox checklistItem={checklistItem} handleChecklistIsDone={this.props.handleChecklistIsDone} />
        <ChecklistInput
          checklistItem={checklistItem}
          handleAmendCheckTask={this.props.handleAmendCheckTask}
          indexOfItem={this.props.indexOfItem}
          handleChecklistSubmit={this.props.handleChecklistSubmit}

        />
        <ChecklistRemoveItem id={id} handleRemoveCheckItem={this.props.handleRemoveCheckItem} />
      </>
    );
  }
}
