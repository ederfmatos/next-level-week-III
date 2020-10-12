import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --app-background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    --yellow: #ffd666;
    --cian: #96FEFF;
    --blue: #15ced6;
    --light-blue: #17d6eb;
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
    font: 18px Nunito, sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;