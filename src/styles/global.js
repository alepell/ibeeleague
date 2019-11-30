import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
    max-width: 100%;
    background: linear-gradient(to right, #7159c1, #AB59C1) !important;
    -webkit-font-smoothing: antialiased !important;
  }

`;