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
    complexity: [
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
    prioritySelected: null,
    complexitySelected: null,
    category: null,
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  selectItem = (taskId, dropDownItem) => {
    this.props.handlePriority(taskId, dropDownItem);
    if(this.state.category === "priority") this.setState({ prioritySelected: dropDownItem.value, isListOpen: false });
    if(this.state.category === "complexity") this.setState({ complexitySelected: dropDownItem.value, isListOpen: false });
  };

  componentDidMount() {
    const category = this.props.category;
    this.setState({ category: category });
  }

  render() {
    console.log(this.state, "check category  dropdwon");
    const isListOpen = this.state.isListOpen;
    const priorityItems = this.state.priority;
    const complexityItems = this.state.complexity;
    const category = this.state.category;
    const taskId = this.props.id;
    return (
      <DdWrapperStyled>
        <DdHeaderButtonStyled onClick={this.toggleList}>
          <DdHeaderTitleStyled>
            {category === "priority" && (this.state.prioritySelected ? this.state.prioritySelected : 0)}
            {category === "complexity" && (this.state.complexitySelected ? this.state.complexitySelected : 0)}
          </DdHeaderTitleStyled>
        </DdHeaderButtonStyled>
        {isListOpen && category === "priority" (
          <DdListStyled>
            {priorityItems.map((priorityItem) => (
              <DdListButton
                key={priorityItem.id}
                onClick={() => this.selectItem(taskId, priorityItem)}
              >
                {priorityItem.value}
              </DdListButton>
            ))}
          </DdListStyled>
        )};
                {isListOpen && category === "complexity" (
          <DdListStyled>
            {complexityItems.map((complexityItem) => (
              <DdListButton
                key={complexityItem.id}
                onClick={() => this.selectItem(taskId, complexityItem)}
              >
                {complexityItem.value}
              </DdListButton>
            ))}
          </DdListStyled>
        )}
      </DdWrapperStyled>
    );
  }
}
