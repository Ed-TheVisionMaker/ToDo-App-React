import React from "react";
import styled from "styled-components";

const DdListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  // position: relative;

  list-style-type: none;

  height: 80px;
  overflow: scroll;
  scrollbar-width: thin;

  border-radius: 5px;

  color: black;
  background-color: white;
`;

const DdListValue = styled.li`
  display: flex;
  justify-content: center;


  width: 100%;

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
    console.log(item, "item", category)
    return (
      <div>
        <button onClick={() => this.handleOpen() }>{item[category]}</button>
       {listOpen && ( <DdListStyled>
        {this.makeNumbersArray(10).map((n) => <DdListValue key={n} onClick={() => this.handleOpen(id, n, category)} >{n}</DdListValue>)}
      </DdListStyled>)}
      </div>
    )
  }
}