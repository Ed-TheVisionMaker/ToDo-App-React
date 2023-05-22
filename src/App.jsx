import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import InputItem from "./InputItem/InputItem";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

button {
  font-family: inherit;
  cursor: pointer;  
  transition: border-color 0.25s;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`

// change to functional component
function App() {
  return;
  <>
    <GlobalStyle />
    <Container>
    <InputItem />
    </Container>
  </>;
}

export default App;
