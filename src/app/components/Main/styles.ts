import { styled } from 'styled-components';

export const Main = styled.main`
  height: 666px;
  margin-inline: 120px;
  margin-block: 3.5rem 2rem;
  justify-content: center;

  & h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${(props) => props.theme["blue-600"]};

    margin-bottom: 1rem;
  }

  & .specialtys {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      border: 1px solid ${(props) => props.theme["blue-400"]};

      background-color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border 0.2s;

      box-shadow: 0 1px 4px -1px black;

      &:focus {
        
      }

      &:hover{
        background-color: ${(props) => props.theme["blue-600"]};
        color: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.white};
        cursor: pointer;
        ;
      }
    }


  }

  
`;