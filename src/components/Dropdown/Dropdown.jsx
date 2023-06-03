import React from "react";
import styled from "styled-components";

const DdButton = styled.button`
  font-size: 16px;

  padding: 5px 10px;
`


const DdListContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  
  // width: 100%

  padding-left: 15px;
  margin-top: 3px;
`

const DdListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;

  height: 80px;
  // width: 100%;
  overflow: scroll;
  scrollbar-width: thin;

  border-radius: 5px;


  color: black;
  background-color: white;
`;

const DdListValue = styled.li`
  display: flex;
  justify-content: center;

  // width: 100%;
  padding: 0 5px;

  color: #242424;
  background-color: var(--white);

  border-radius: 5px;
  border: 0;

  &:hover {
    background-color: grey;
  }
`;


export default class Dropdown extends React.Component {
  state = {
    listOpen: false,
  }

  makeNumbersArray = (n) => {
    return Array(n)
    .fill()
    .map((_, i) => i + 1)
  }

  handleOpen = (id, n, category) => {
    this.setState((prevState) => ({ listOpen: !prevState.listOpen, }))
    if(id) {
      this.props.handleTaskValues(id, n, category)
    }
  }



  render() {
    const {id, item, category} = this.props
    const listOpen = this.state.listOpen
    return (
      <div>
        <DdButton onClick={() => this.handleOpen() }>{item[category]}</DdButton>
        <DdListContainer>
        {listOpen && ( <DdListStyled>
        {this.makeNumbersArray(10).map((n) => <DdListValue key={n} onClick={() => this.handleOpen(id, n, category)} >{n}</DdListValue>)}
      </DdListStyled>)}
        </DdListContainer>

      </div>
    )
  }
}