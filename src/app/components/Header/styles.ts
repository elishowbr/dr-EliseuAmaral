import { styled } from 'styled-components'

export const Head = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  & .logoInfo {

    & > h1 {
      font-size: 2.25rem;
      transition: 0.3s ease-in-out;


      &:hover {
      color: #154277;
    }
    }

    & p {
      text-align: end;
      line-height: 0;
      transition: 0.3s ease-in-out;


      &:hover {
      color: #154277;
    }
    }
    
  }

  & nav {
    display: flex;
    gap: 3rem;
    align-items: center;
    
    & a {
      font-size: 1.25rem;
      transition: 0.3s ease-in-out;

    &:hover {
      color: #154277;
    }
  }

  }

  & button {
    background-color: ${props => props.theme['blue-400']};
    color: white;
    height: min-content;
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 8px;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;
    cursor: pointer;
    transition: 0.3s ease-in-out; // Coloca a transition no próprio botão, a animação fica mais clean!

    &:hover {
      background-color: ${props => props.theme['blue-600']};
      transition: 0.2s;
    }
  }
`;

