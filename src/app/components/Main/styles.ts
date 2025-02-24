import { defaultTheme } from "@/app/styles/theme/default";
import { styled } from "styled-components";

export const Main = styled.main`

  & h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${defaultTheme.blue_600};
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  & .servicos {
    display: flex;
    justify-content: space-between;
  }

  & .card {
    background-color: ${defaultTheme.white};
    max-width: 38rem;
    height: 95%;
    align-self: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    & #imgCard {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
    }

    & #textCard {
      padding-inline: 1rem;
      padding-block: 0.2rem 1rem;

      & #titleCard {
        font-size: 1.75rem;
        font-weight: bold;
        color: ${defaultTheme.blue_600};
        margin-bottom: 0.5rem;
      }

      & p {
        line-height: 1.4;
      }
    }
  }

  & .specialtys {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    user-select: none;
    width: fit-content;

    & .specialtyitem {
      display: flex;
      align-items: center;
      width: 24rem;
      gap: 12px;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background-color: ${defaultTheme.white};
      border: 1px solid ${defaultTheme.blue_600};
      transition: background-color 0.2s, color 0.2s, outline 0.05s ease-in-out,
        margin 0.3s;

      & h4 {
        font-weight: 600;
      }

      &:focus {
        box-shadow: 0 0 0 2px ${defaultTheme.blue_400};
        background-color: ${defaultTheme.blue_600};
        color: ${defaultTheme.white};
        margin-left: 2rem;
      }

      &:hover {
        outline: 2px solid ${defaultTheme.blue_600};
        cursor: pointer;
      }
    }
  }

  /* Revisado! 24/02/25 */
  /* Smartphones médios e grandes */
  @media (min-width: 375px) or (max-width: 375px) {
    padding: 3rem 0;

    h2 {
      text-align: center;
    }

    .servicos {
      flex-direction: column-reverse;
    }

    .specialtys {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem 3rem;
      align-self: center;

      .specialtyitem {
        width: fit-content;
        padding: 1rem;
        justify-self: center;

        &:focus {
        margin-left: 0rem;
      }
        h4 {
          display: none;
        }
      }
    }


    .card {
      width: 95%;
      margin-bottom: 2rem;
      height: 36rem;

      h3, p {
        line-height: 1.2;
      }
    }
  }

  /* Tablets e smartphones no modo paisagem */
  @media (min-width: 768px) {
    .card {
      max-width: 32rem;
      margin-bottom: 2rem;
      height: 33rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 4rem 6rem;

    h2 {
      text-align: start;
    }

    .servicos {
      flex-direction: row;
    }

    .specialtys {
      margin-right: 0rem;
      display: flex;
      
      .specialtyitem{
        width: 24rem;

      h4 {
        display: block;
      }

      &:focus {
        margin-left: 0rem;
      }
    }
    }      

    .card {
      max-width: 38rem;
      margin-bottom: 0;
      margin-left: 2rem;

      h3, p{
        line-height: 1.2;
      }

    }
  }

  @media (min-width: 1440px) {

    h2 {
      margin-left: 6rem;
    }

    .servicos {
      margin: 0 6rem;

      .specialtys {
        .specialtyitem {
          &:focus {
            margin-left: 2rem;
          }
        }
      }
    }

    .card {
      width: 38rem;
      h3, p{
        line-height: 1.4;
      }
    }
  }
`;
