import { defaultTheme } from '@/app/styles/theme/default';
import { styled } from 'styled-components'

export const ContactSection = styled.section` 
    margin: 1rem 6rem 6rem 6rem;

  & h2 {
    color: ${defaultTheme.blue_600};
  }

  & #contact-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    background-color: ${defaultTheme.blue_400};
    border-radius: 8px;

    & ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.75rem;

      & li {
        display: flex;
        gap: 0.75rem;

        & a {
          color: white;

          &:hover {
            text-decoration: underline;
            color: white;
          }
        }
      }
    }

    & .contact-map {
      border-radius: 8px;
      width: 100%;
      max-width: 33rem;
      height: 25rem;
    }
  }


  /* Revisado! */
  /* Smartphones médios e grandes */
  @media (min-width: 375px) {
    margin: 1rem 1rem 4rem;

    & h2 {
      margin-bottom: 16px;
    }

    & #contact-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    & .contact-map{
        height: fit-content !important;
        aspect-ratio: 1;
    }
  }

  /* Tablets e smartphones no modo paisagem */
  @media (min-width: 768px) {
    margin: 1rem 2rem 4rem;
  }

@media (min-width: 1024px) {

    &{
        padding: 0;
        margin: 0 6rem 4rem 6rem;

        & h2 {
            text-align: start;
        }
    }

    & #contact-container {
        flex-direction: row;
    }
  }

  @media (min-width: 1440px) {
    & {
      padding-inline: 6rem;
    }
  }
`;  