import React from "react";
import styled from "styled-components";

// https://blog.logrocket.com/customize-reusable-react-dropdown-menu-component/
// follow these instructions

const DdWrapperStyled = styled.div`
  position: relative;

  margin-left: 10px;
  margin-right: 10px;

`;

const DdHeaderButtonStyled = styled.button`
  width: 25px;
  height: 25px;

`;

const DdHeaderTitleStyled = styled.div`
`;

const DdListStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  left: -2.5px;
  z-index: 1;

  height: 80px;
  overflow: scroll;
  scrollbar-width: thin;

  border-radius: 5px;

  color: black;
  background-color: white;
`;

const DdListButton = styled.button`
  width: 30px;
  height: 25px;

  color: #242424;
  background-color: var(--white);
  border-radius: 5px;
  border: 0;

  &:hover {
    background-color: grey;
  }
`;

export default class Dd extends React.Component {
  state = {
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
    isListOpen: false,
    priorityValue: this.props.priority || null,
    complexityValue: this.props.complexity || null,
    category: null,
  };

  // create an array and then map over the numbers. Use props for values.

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  selectItem = (taskId, dropDownItem, category) => {
    this.props.handleTaskValues(taskId, dropDownItem, category);
    const value = dropDownItem.value;
    if (category === "priority")
      this.setState({ priorityValue: value, isListOpen: false });
    if (category === "complexity")
      this.setState({ complexityValue: value, isListOpen: false });
  };

  componentDidMount() {
    const category = this.props.category;
    this.setState({ category: category });
  }

  render() {
    console.log(this.props, "props in dropdown")
    const isListOpen = this.state.isListOpen;
    const priorityItems = this.props.priority;
    const complexityItems = this.props.complexity;
    const category = this.props.category;
    const taskId = this.props.id;
    return (
      <DdWrapperStyled>
        <DdHeaderButtonStyled onClick={this.toggleList}>
          <DdHeaderTitleStyled>
            {category === "priority" &&
              (this.state.priorityValue ? this.state.priorityValue : 0)}
            {category === "complexity" &&
              (this.state.complexityValue ? this.state.complexityValue : 0)}
          </DdHeaderTitleStyled>
        </DdHeaderButtonStyled>
        {isListOpen && category === "priority" && (
          <DdListStyled>
            {priorityItems.map((priorityItem) => (
              <DdListButton
                key={priorityItem.id}
                onClick={() => this.selectItem(taskId, priorityItem, category)}
              >
                {priorityItem.value}
              </DdListButton>
            ))}
          </DdListStyled>
        )}
        {isListOpen && category === "complexity" && (
          <DdListStyled>
            {complexityItems.map((complexityItem) => (
              <DdListButton
                key={complexityItem.id}
                onClick={() =>
                  this.selectItem(taskId, complexityItem, category)
                }
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
