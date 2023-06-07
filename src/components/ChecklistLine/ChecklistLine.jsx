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
    const {checklistItem, indexOfitem, item} = this.props;
    const id = this.props.checklistItem.id;
    // console.log(this.props.indexOfItem, "index of item ChecklistLoine")
    return (
      <>
        <ChecklistCheckbox checklistItem={checklistItem} handleChecklistIsDone={this.props.handleChecklistIsDone} />
        <ChecklistInput
          checklistItem={checklistItem}
          handleAmendCheckTask={this.props.handleAmendCheckTask}
          item={item}
          handleChecklistSubmit={this.props.handleChecklistSubmit}

        />
        <ChecklistRemoveItem id={id} handleRemoveCheckItem={this.props.handleRemoveCheckItem} indexOfItem={indexOfItem} />
      </>
    );
  }
}
