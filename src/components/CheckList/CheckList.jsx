import React from "react";
import styled from "styled-components";

export default class CheckListAdd extends React.Component {
    state = {
        checkListOpen: false,
    }

    toggleOpen = () => {
        this.setState((prevState) => ({ checkListOpen: !prevState.checkListOpen}))
    }
    render() {
        return
    }

}