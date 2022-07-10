import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Open24DisplaySt from './Open24DisplaySt.ttf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'LCDDisplay';
    src: url(${Open24DisplaySt}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'LCDDisplay';
  }

  h1 {
    font-family: 'LCDDisplay';
  }
`;