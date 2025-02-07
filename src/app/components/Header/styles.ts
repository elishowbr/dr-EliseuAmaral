import { styled } from 'styled-components'

export const Head = styled.header`
  height: 5.625rem;

  display: flex;

  padding: 1rem 0;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  & .logo {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;

    & p {
      position: absolute;
      bottom: -6px;
      right: 0;

      font-weight: 300;
    }
  }

  & nav {
    display: flex;
    gap: 3rem;
    align-items: center;

    margin-left: auto;
    margin-right: 3rem;

    & a {
      font-size: 1.25rem;
    }
  }

  & button {
    background-color: #4a90e2;
    color: white;
    padding: 0.75rem 1.125rem;

    border: 0;
    border-radius: 8px;

    font-size: 1.25rem;
    text-transform: uppercase;

    &:hover {
      background-color: rgb(57, 112, 173);
      transition: 0.2s;
    }
  }
`;

