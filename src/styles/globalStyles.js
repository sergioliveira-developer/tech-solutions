import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
   
    box-sizing: border-box;
 
  }

  body,input, button {
    font-family: 'Satoshi', sans-serif;
  }

  body {
    background-color: ${theme.colors.darkpurple};
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 1920px;
    margin: 0 auto;
    
  }

`;
