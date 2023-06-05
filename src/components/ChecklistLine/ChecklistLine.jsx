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
    const { checkTask, id, isDone } = this.props.checklistItem;
    return (
      <>
        <ChecklistCheckbox isDone={isDone} />
        <ChecklistInput
          checklistItem={checklistItem}
          handleAmendCheckTask={this.props.handleAmendCheckTask}
        />
        {/* <ChecklistRemoveItem id={id} /> */}
      </>
    );
  }
}
