import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      padding: 0;
      overflow: initial !important;
      min-height: 100vh;
      min-width: 100vw;
  }
  body {
      font-size: 18px;
      line-height: 1.46668;
      font-weight: 400;
      background: #F7FFF7;
      font-variant-ligatures: common-ligatures;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
  }
  * {
      box-sizing: border-box;
  }
`