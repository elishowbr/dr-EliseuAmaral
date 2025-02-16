import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './theme/default';

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  html,body{
    background-color: #E8F4F8;
    font-family: Poppins, sans-serif;
  }


  a{
    text-decoration: none;
    color: #000000;
  }

  h1{
    font-size: 2.5rem;
  }

  h2{
    font-size: 2.25rem;
    font-weight: bold;
  }

  p{
    font-size: 1rem;
  }

  ul{
    list-style: none;
  }

  :focus{
    outline: 0;
    border-radius: 2px;
    box-shadow: 0 0 0 2px  ${defaultTheme.blue_600};
  }

  footer {
    background-color: #D2DDE3;
  }

`;