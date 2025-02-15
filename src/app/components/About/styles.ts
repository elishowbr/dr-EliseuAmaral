import { defaultTheme } from '@/app/styles/theme/default';
import styled from 'styled-components'

export const AboutMe = styled.section`
  display: flex;
  padding-inline: 6rem;
  padding-block: 6rem;

  justify-content: space-between;

  & #imgProfile {
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  & #containerAbout {
    max-width: 615px;

    & h2{
    color: ${defaultTheme.blue_600};
    letter-spacing: 1px;
    margin-bottom: 26px;
  }

    & p {
      line-height: 1.5;
    }
  }

  /* Smartphones médios e grandes */
  /* Smartphones médios e grandes */
  @media (min-width: 375px) and (max-width: 768px) {

    padding-inline: 2rem;

    flex-direction: column;
    align-items: center;

    & #imgProfile {
      height: 100%;
      width: 100%;
      max-width: 400px;

      aspect-ratio: 1/1;

      margin-bottom: 4rem;
    }

    & #containerAbout {
      text-align: center;
      & h2 {
      }
      & p {
      }
    }
  }

  /* Tablets e smartphones no modo paisagem */
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    #containerAbout {
      max-width: 30rem;
      margin-right: 3rem;

      & h2 {
        margin-bottom: 0px;
      }
    }

    #imgProfile {
      width: 24rem;
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 1440px) {
    #containerAbout {
      max-width: 38rem;
      margin-right: 6rem;
    }

    #imgProfile {
      margin-left: 6rem;
    }
  }
`;