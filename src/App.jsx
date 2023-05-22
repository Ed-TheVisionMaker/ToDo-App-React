import React from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

import InputItem from "./components/InputItem/InputItem";


const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

// change to functional component
function App() {
  return (
  <>
    <GlobalStyle />
    <Container>
    <InputItem />
    </Container>
  </>
  );
  
}

export default App
