import { createGlobalStyle } from 'styled-components';
 
export  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    .container {
      display: grid;
      grid-template-columns: 1fr;
      padding: 25px;
    }
  }
`;