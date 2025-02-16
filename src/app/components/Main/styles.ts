import { defaultTheme } from '@/app/styles/theme/default';
import { styled } from 'styled-components';

export const Main = styled.main`
  margin-inline: 6rem;
  margin-block: 3.5rem 3rem;

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
      list-style: none;
      display: flex;
      align-items: center;
      width: 24rem;
      gap: 12px;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background-color: ${defaultTheme.white};
      border: 1px solid ${defaultTheme.blue_600};
      transition: background-color 0.2s, color 0.2s, outline 0.05s ease-in-out, margin 0.3s;

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
@media (min-width: 375px) {

}

/* Tablets e smartphones no modo paisagem */
@media (min-width: 768px) {

}
@media (min-width: 1024px) {

  h2 { 
    text-align: center;
  }
  .servicos {
    flex-flow: column-reverse;
    align-items: center;
    height: 45rem;
    gap: 2rem;
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

  h2, .servicos {
      margin-left: 6rem;

      & .specialtyitem {
        width: 25rem;
      }
    }

    .card {
      max-width: 38rem;
      margin-right: 6rem;
    }
}
`;