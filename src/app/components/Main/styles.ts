import { defaultTheme } from "@/app/styles/theme/default";
import { styled } from "styled-components";

export const Main = styled.main`
  margin-inline: 12rem;
  margin-block: 3rem;

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
    height: 33rem;
  }

  & .card {
    background-color: ${defaultTheme.white};
    max-width: 38rem;
    height: fit-content;
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

  /* Smartphones médios e grandes */
  @media (min-width: 375px) and (max-width: 767px) {
  }

  /* Tablets e smartphones no modo paisagem */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-inline: 6rem;

    .servicos {
      flex-flow: column-reverse;
      align-items: center;
      height: 38rem;
      gap: 3rem;
    }

    & .specialtys {
      display: grid;
      grid-template-columns: repeat(6, 75px);
      gap: 50px;
      height: min-content;

      & .specialtyitem {
        padding: 0.5rem;
        width: 75px;
        height: fit-content;
        justify-content: center;
        align-items: center;

        h4 {
          display: none;
        }

        &:focus {
          margin-left: 0rem;
        }
      }
    }

  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-inline: 6rem;

    h2 {
      text-align: center;
    }
    .servicos {
      flex-flow: column-reverse;
      align-items: center;
      height: 46rem;
      gap: 3rem;
    }

    .specialtys {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;

      .specialtyitem {
        width: 16rem;
        transition: transform 0.3s;

        &:focus {
          box-shadow: 0 0 0 2px ${defaultTheme.blue_400};
          background-color: ${defaultTheme.blue_600};
          color: ${defaultTheme.white};
          margin-left: 0;
          transform: scale(1.02);
        }
      }
    }

    .card {
      max-width: 30rem;
    }
  }

  @media (min-width: 1440px) {
  }
`;
