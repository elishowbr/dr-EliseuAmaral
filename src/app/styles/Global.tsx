import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html,body{
    background-color: #E8F4F8;
    font-family: Poppins, sans-serif;
    

  }

  .container{
    padding-left: 2rem;
    padding-right: 2rem;
  }

  a{
    text-decoration: none;
    color: #000000;
  }

  h1{
    font-size: 3.33rem;
  }

  h2{
    font-size: 2.25rem;
    font-weight: bold;
  }

  p{
    font-size: 1rem;
  }

`;