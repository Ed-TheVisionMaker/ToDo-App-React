import React from "react";
import Dropdown from "react-dropdown";
import styled from "styled-components";

// https://blog.logrocket.com/customize-reusable-react-dropdown-menu-component/
// follow these instructions

const DdWrapperStyled = styled.div`
  position: relative;
`;

const DdHeaderButtonStyled = styled.button`
position: absolute; 
top: 0;
left: 0;
`;

const DdHeaderTitleStyled = styled.div``;

const DdListStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
`;

const DdListButton = styled.button``;

export default class Dd extends React.Component {
  state = {
    isListOpen: false,
    priority: [
      { value: 0, id: `${Math.random()} * ${Math.random()}` },
      { value: 1, id: `${Math.random()} * ${Math.random()}` },
      { value: 2, id: `${Math.random()} * ${Math.random()}` },
      { value: 3, id: `${Math.random()} * ${Math.random()}` },
      { value: 4, id: `${Math.random()} * ${Math.random()}` },
      { value: 5, id: `${Math.random()} * ${Math.random()}` },
      { value: 6, id: `${Math.random()} * ${Math.random()}` },
      { value: 7, id: `${Math.random()} * ${Math.random()}` },
      { value: 8, id: `${Math.random()} * ${Math.random()}` },
      { value: 9, id: `${Math.random()} * ${Math.random()}` },
      { value: 10, id: `${Math.random()} * ${Math.random()}` },
    ],
    prioritySelected: 0,
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  selectItem = (item) => {
    this.setState({ prioritySelected: item.value, isListOpen: false });
  };

  render() {
    const isListOpen = this.state.isListOpen;
    const isPriority = this.state.priority;
    return (
      <DdWrapperStyled>
        <DdHeaderButtonStyled onClick={this.toggleList}>
          <DdHeaderTitleStyled>
            {this.state.prioritySelected}
          </DdHeaderTitleStyled>
        </DdHeaderButtonStyled>
        {isListOpen && (
          <DdListStyled>
            {isPriority.map((item) => (
              <DdListButton key={item.id} onClick={() => this.selectItem(item)}>
                {item.value}
              </DdListButton>
            ))}
          </DdListStyled>
        )}
      </DdWrapperStyled>
    );
  }
}
