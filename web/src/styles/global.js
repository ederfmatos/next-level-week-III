import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body,#root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: #fff;
    background: #ebf5f5;
  }

  button {
    cursor: pointer;
  }

  body,
  input,
  button,
  textarea,
  a {
    font: 14px Nunito, sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;