import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html{
    background-color: #E8F4F8;


    margin-left: 2rem;
    margin-right: 2rem;
  }

  a{
    text-decoration: none;
  }


`;