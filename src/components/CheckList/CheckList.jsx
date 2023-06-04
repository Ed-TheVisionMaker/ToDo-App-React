import React from "react";
import styled from "styled-components";

import ChecklistCheckbox from "../ChecklistCheckbox/ChecklistCheckbox";
import ChecklistText from "../ChecklistText/ChecklistText";
import ChecklistRemoveItem from "../ChecklistRemoveItem/ChecklistRemoveItem";

export default class CheckList extends React.Component {
  state = {
    checkListOpen: false,
  };

  toggleOpen = () => {
    this.setState((prevState) => ({ checkListOpen: !prevState.checkListOpen }));
  };
  render() {
    return (
      <div>
        <ChecklistCheckbox />
        <ChecklistText />
        <ChecklistRemoveItem />
      </div>
    );
  }
}
