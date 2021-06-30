import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: auto;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    font-size: 14px;
  }
`
