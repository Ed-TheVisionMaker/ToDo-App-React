import React from "react";
import styled from "styled-components";

const DdWrapperStyled = styled.div`
  position: relative;
`;

const DdHeaderButtonStyled = styled.button`
  top: 0;
  left: 0;
`;

const DdHeaderTitleStyled = styled.div``;

const DdListStyled = styled.div`
  position: absolute;
  top: 20px;
  border: 1px solid white;

  display: flex;
  flex-direction: column;
`;

const DdListButton = styled.button``;


export default class SortButton extends React.Component {
  state = {
    isListOpen: false,
    category: null,
  }

  toggleList = () => {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  };

  componentDidMount() {
    const category = this.props.category;
    this.setState({ category: category });
  }

  render () {
    const isListOpen = this.state.isListOpen;
    const category = this.state.category;
    return (
      <DdWrapperStyled>
          <DdHeaderButtonStyled>
              <DdHeaderButtonStyled onClick={this.toggleList} >Sort</DdHeaderButtonStyled>
          </DdHeaderButtonStyled>
          {isListOpen && (
            <DdListStyled>
              <DdListButton onClick={() => this.props.handleSort("default", category)} >Default</DdListButton>
              <DdListButton onClick={() => this.props.handleSort("ascending", category)} >Asc</DdListButton>
              <DdListButton onClick={() => this.props.handleSort("descending", category)} >Desc</DdListButton>
          </DdListStyled>
          )}   
      </DdWrapperStyled>
  )
    }
};

