import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  --white: rgba(255, 255, 255, 0.87);

  color-scheme: light dark;
  color: var(--white);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

body {
  display: flex;
  justify-content: center;
  place-items: center;

  min-width: 320px;
  min-height: 100vh;

  margin: 0;
}

button {
  font-family: inherit;
  cursor: pointer;  
}

h3 {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
}

`;

export default GlobalStyle;
