import css from "styled-jsx/css"

export default css.global`
  html,
  body {
    padding: 0;
    margin: auto;
    max-width: 1400px;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: Arial;
    background: rgba(0, 0, 0, 0.05);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .bold {
    font-weigth: bold;
  }

  .title {
    font-weigth: bold;
    text-align: center;
  }
`


