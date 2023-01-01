import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .body {
    max-width: 1400px;
  }

  .bg-color {
    background-color: #DADADA;
    min-height: 100vh;
  }
`

export default GlobalStyles;
