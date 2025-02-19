import { defaultTheme } from '@/app/styles/theme/default';
import styled from 'styled-components'

export const AboutMe = styled.section`
  display: flex;
  padding-inline: 6rem;
  padding-block: 6rem;
  gap: 3rem;

  align-items: center;
  justify-content: space-between;

  & #imgProfile {
    height: 100%;
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  & #containerAbout {
    max-width: 40rem;

    & h2 {
    color: ${defaultTheme.blue_600};
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
  }

    & p {
      line-height: 1.5;
    }
  }


  /* Revisado! */
  /* Smartphones médios e grandes */
  @media (min-width: 375px) {
    padding-inline: 2rem;
    flex-direction: column;
    gap: 0;

    & #imgProfile {
      margin-bottom: 4rem;
    }

    & #containerAbout {
      text-align: center;
    }
  }

  /* Tablets e smartphones no modo paisagem */
  @media (min-width: 768px) {
    padding-inline: 2rem;

    & #imgProfile {
      width: 20rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 6rem;

    #containerAbout {
      max-width: 28rem;
      text-align: start;

      & h2 {
        margin-bottom: 1rem;
      }
    }

    #imgProfile {
      margin-bottom: 0;
      width: 22rem;
    }
  }

  @media (min-width: 1440px) {
    padding: 8rem 12rem;
  }

`;