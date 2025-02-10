import { styled } from 'styled-components';

export const Main = styled.main`
  margin-inline: 120px;
  margin-block: 3.5rem 3rem;

  & h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["blue-600"]};

    margin-bottom: 2rem;
  }

  & .servicos {
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: space-between;
  }

  & .card{
    background-color: white;
    max-width: 40rem;

    border-radius: 10px;

    & #imgCard{
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
    }

    & #textCard {
      padding-inline: 1rem ;
      padding-block: 0.2rem 1rem;

      & #titleCard{
        font-size: 1.75rem;
        font-weight: bold;
        color: ${props => props.theme['blue-600']};
        margin-bottom: 1rem;
      }

      & p {
        
      }
    }
  }

  & .specialtys {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;

    gap: 13px;

    & .specialtyitem {
      list-style: none;
      width: 25rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      padding: 0.5rem 1rem;

      border-radius: 8px;
      border: 1px solid ${(props) => props.theme["blue-600"]};

      background-color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border 0.2s;

      &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme["blue-400"]};
      }

      &:hover {
        background-color: ${(props) => props.theme["blue-600"]};
        color: ${(props) => props.theme.white};
        cursor: pointer;
      }
    }
  }
`;