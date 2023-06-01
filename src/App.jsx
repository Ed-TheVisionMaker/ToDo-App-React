import React from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

import Header from "./components/Header/Header";
import InputItem from "./components/InputItem/InputItem";

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;
  margin: 0 auto;
`;

// change to functional component
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <InputItem />
      </Container>
    </>
  );
}

export default App;
