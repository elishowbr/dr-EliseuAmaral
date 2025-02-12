import { styled } from 'styled-components'

export const Head = styled.header`
  display: flex;
  align-items: center;
  padding: 1.25rem 4rem;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px -3px 5px 0px rgba(0,0,0, 0.3) inset;

  & .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  & .logoInfo {

    & > h1 {
      font-size: 2.25rem;
      transition: color 0.3s ease-in-out;


      &:hover {
      color: #154277;
    }
    }

    & p {
      text-align: end;
      line-height: 0;
      transition: color 0.3s ease-in-out;


      &:hover {
      color: #154277;
    }
    }
  }
  
  & .headerInfo {
    display: flex;
    align-items: center;
    gap: 2rem;

    & nav {
    display: flex;
    gap: 3rem;
    
    &:focus {
      border-radius: 2px;
    }
    & a {
      font-size: 1.25rem;
      transition: color 0.3s ease-in-out;

    &:hover {
      color: #154277;
    }
  }
  }

  & #wppContact {
    background-color: ${props => props.theme['blue-400']};
    color: white;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 8px;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
      background-color: ${props => props.theme['blue-600']};
    }
  }
  }

  @media (max-width: 1920px) {
    .logo {
      margin-left: 4rem;
    }

    .headerInfo {
      margin-right: 4rem;
    }
  }

  @media (max-width: 1280px) {
    .logo {
      margin: 0;
    }

    .headerInfo {
      margin: 0;
    }
  }
`;

