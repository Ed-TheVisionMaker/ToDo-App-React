import React from "react";
import styled from "styled-components";

const DdWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 0;
`;

const DdHeaderButtonStyled = styled.button`
  padding: 2px 5px;
  border-radius: 5px;
  border: 0;
`;

const DdHeaderTitleStyled = styled.div``;

const DdListStyled = styled.div`
  position: absolute;
  top: 25px;
  left: 20px;
  z-index: 1;

  display: flex;
  flex-direction: column;

  
  border-radius: 10px;
  border: 1px solid grey;
  box-shadow: 1px 1px 2px grey;

  background-color: white;
`;

const DdListButton = styled.button`

  color: black;
  background-color: white;
  border: 0;
  border-radius: 5px;
  padding: 3px;

  &:hover {
    background-color: grey;
    border-radius: 0;
  }
`;

const DdListSVG = styled.svg`
  height: 15px;
`;

export default class SortButton extends React.Component {
  state = {
    isListOpen: false,
    category: null,
  };

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  componentDidMount() {
    const category = this.props.category;
    this.setState({ category: category });
  }

  render() {
    const isListOpen = this.state.isListOpen;
    const category = this.state.category;
    const toggleList = this.toggleList;
    return (
      <DdWrapperStyled>
        <DdHeaderButtonStyled>
          <DdHeaderButtonStyled onClick={toggleList}>Sort</DdHeaderButtonStyled>
        </DdHeaderButtonStyled>
        {isListOpen && (
          <DdListStyled>
            <DdListButton
              onClick={() =>
                this.props.handleSort("default", category, toggleList)
              }
            >
              Default
            </DdListButton>
            <DdListButton
              onClick={() =>
                this.props.handleSort("ascending", category, toggleList)
              }
            >
              <DdListSVG
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              </DdListSVG>
            </DdListButton>
            <DdListButton
              onClick={() =>
                this.props.handleSort("descending", category, toggleList)
              }
            >
              <DdListSVG
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </DdListSVG>
            </DdListButton>
          </DdListStyled>
        )}
      </DdWrapperStyled>
    );
  }
}
