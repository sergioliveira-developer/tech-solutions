import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
  }

  body,input, button {
    font-family: 'Satoshi', sans-serif;
  }

  body {
    background-color: ${theme.colors.darkpurple};
    -webkit-font-smoothing: antialiased;
  }

  #root {
    position: relative;
    width: 120rem;
    max-height: 100rem;
    background-color: ${theme.colors.darkpurple};
  }

`;
