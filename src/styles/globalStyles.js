import { createGlobalStyle } from 'styled-components';

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
`;
