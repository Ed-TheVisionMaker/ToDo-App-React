import React from "react";
import styled from "styled-components";

import ChecklistCheckbox from "../ChecklistCheckbox/ChecklistCheckbox";
import ChecklistText from "../ChecklistInput/ChecklistInput";
import ChecklistRemoveItem from "../ChecklistRemoveItem/ChecklistRemoveItem";

export default class Checklist extends React.Component {
  state = {
    checkListOpen: false,
  };

  toggleOpen = () => {
    this.setState((prevState) => ({ checkListOpen: !prevState.checkListOpen }));
  };
  render() {
    return (
      this.props.item.checklist.map((checklistItem) => {
        return (
          <div>
          {/* <ChecklistCheckbox /> */}
          <ChecklistText />
          <ChecklistRemoveItem />
        </div>
        )
      })
    );
  }
}
