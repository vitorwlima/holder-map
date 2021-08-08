import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Nunito';
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button {
    border: none;
  }

  input {
    border: none;

    &:focus {
      border: none;
      outline: none;
    }
  }
`
