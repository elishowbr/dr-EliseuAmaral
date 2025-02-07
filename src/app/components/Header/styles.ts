import { styled } from 'styled-components'

export const Head = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;

  padding: 1rem 2rem;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & .logoInfo {
    display:flex;
    flex-flow: column;
    height: min-content;

    #titulo {
      font-size: 2.25rem;
    }

    & p {
      text-align: end;
      line-height: 0;
    }
  }

  & nav {
    display: flex;
    gap: 3rem;
    align-items: center;
    
    & a {
      font-size: 1.25rem;
    }
  }

  & button {
    background-color: #4a90e2;
    color: white;
    height: min-content;
    padding: 0.8rem 1.125rem;
    border: 0;
    border-radius: 8px;
    font-size: 1.25rem;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background-color: #154277;
      transition: 0.2s;
    }
  }
`;

