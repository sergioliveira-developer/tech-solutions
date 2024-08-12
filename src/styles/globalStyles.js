import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
  }

  body,input, button {
    font-family: 'Satoshi', sans-serif;
  }

  h1, h3, p, button,  input {
    line-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.darkpurple};
  }

  #root  {
    max-width: 120rem;
    height: 4614px;
    margin: 0 auto;
  }
`;
