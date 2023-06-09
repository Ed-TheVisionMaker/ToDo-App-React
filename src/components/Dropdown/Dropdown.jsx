import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DdButton = styled.button`
  font-size: 16px;

  padding: 5px 10px;
`;

const DdListContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;

  padding-left: 15px;
  margin-top: 3px;
`;

const DdList = styled.ul`
  display: flex;
  flex-direction: column;

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

  padding: 0 5px;

  color: #242424;
  background-color: var(--white);

  border-radius: 5px;
  border: 0;

  &:hover {
    background-color: grey;
  }
`;

function Dropdown(props) {
  const [listOpen, setListOpen] = useState(false);

  const makeNumbersArray = (n) => {
    return Array(n)
      .fill()
      .map((_, i) => i + 1);
  };

  const handleOpen = (id, n, category) => {
    setListOpen(!listOpen);

    if (id) {
      props.handleTaskValues(id, n, category);
    }
  };

  const { id, item, category } = props;

  return (
    <div>
      <DdButton onClick={() => handleOpen()}>{item[category]}</DdButton>
      <DdListContainer>
        {listOpen && (
          <DdList>
            {makeNumbersArray(10).map((n) => (
              <DdListValue key={n} onClick={() => handleOpen(id, n, category)}>
                {n}
              </DdListValue>
            ))}
          </DdList>
        )}
      </DdListContainer>
    </div>
  );
}

export default Dropdown;