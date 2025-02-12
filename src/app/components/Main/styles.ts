import { styled } from 'styled-components';

export const Main = styled.main`
  margin-inline: 120px;
  margin-block: 3.5rem 3rem;

  & h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["blue-600"]};
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  & .servicos {
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: space-between;
  }

  & .card{
    background-color:rgb(224, 224, 224);
    max-width: 40rem;
    box-shadow: 0 0 0 2px rgba(0,0,0, 0.3);

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
        margin-bottom: 0.5rem;
      }

      & p {
        line-height: 1.4;
      }
    }
  }

  & .specialtys {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    gap: 14px;
    user-select: none;

    & .specialtyitem {
      list-style: none;
      width: 25rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme["blue-600"]};
      transition: background-color 0.2s, color 0.2s, outline 0.05s ease-in-out, margin 0.3s;

      & h4 {
        font-weight: 600;
      }
      
      &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme["blue-400"]};
        background-color: ${(props) => props.theme["blue-600"]};
        color: ${(props) => props.theme.white};
        margin-left: 2.5rem;
      }

      &:hover {
        outline: 2px solid ${props => props.theme["blue-600"]};
        cursor: pointer;
      }
    }
  }


@media (max-width: 1920px) {

  h2, .servicos {
    margin-left: 4rem;
  }

  .card {
    margin-right: 8rem;
  }
}
`;