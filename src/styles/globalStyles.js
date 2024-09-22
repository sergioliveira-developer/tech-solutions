import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
  }

    /* Configurações da Scrollbar */
    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: #060606;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: linear-gradient(180deg, #FA12E3, #7312FA, #415CA7);
        border: 1px solid #060606;
    }

    ::-webkit-scrollbar-thumb:hover {
        border-radius: 6px;
        background: linear-gradient(0deg, #FA12E3, #7312FA, #415CA7);
        border: 1px solid #060606;
    }

  body, input, button, h1, h3, p {
    font-family: 'Satoshi', sans-serif;
  }

  button, a, input {
    cursor: pointer;
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
