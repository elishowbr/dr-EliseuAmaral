import { defaultTheme } from "@/app/styles/theme/default";
import { styled } from "styled-components";

export const Hero = styled.section`
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  user-select: none;
  background-image: url("images/foto.jpg");
  background-size: cover;
  
  & h2 {
    width: 650px;
    font-size: 2.25rem;
    color: ${defaultTheme.blue_600}
  }

  & .hero-items {
    display: flex;
    justify-content: space-around;
    padding: 0 2rem;

    & .hero-item {
    display: flex;
    background-color: ${defaultTheme.heroCard};
    border-radius: 18px;
    height: 6rem;
    min-width: 12rem;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease-in-out;
    padding: 0 1rem;

    &:hover {
      background-color: ${defaultTheme.blue_600};
  }

    & p {
      color: ${defaultTheme.white_200};
      transition: color 0.3s ease-in-out;
      font-size: 1rem;
      margin-left: 2rem;
    }
}
}



/* Revisado! 20/02/2025 */
/* Smartphones médios e grandes */
/* Adicional dos menores! */
@media (min-width: 375px) or (max-width: 375px) {
  & {
    padding: 0;
    height: fit-content;

    & h2 {
      display: none;
    }

    & .hero-items{
      flex-direction: column;
      gap: 2rem;
      margin: 3rem 0;
      padding: 0 1rem;

      & .hero-item{
        height: fit-content;
        padding-block: 0.5rem;
        min-width: calc(14rem + 2vw);

        & p {
        margin-left: 0;
        }
      }
    }
  }
}

/* Tablets e smartphones no modo paisagem */
@media (min-width: 768px) {

  & h2 {
    display: block;
    max-width: 80%;
    margin: 0 2rem;
    margin-top: 2rem;
  }

  & .hero-items {
    margin-left: 1rem;
    & .hero-item{
        height: 90px;
        max-width: 24rem;

        & p {
        margin-left: 0;
        }
      }
  }
}

@media (min-width: 1024px) {

  & {
    padding: 2rem 4rem;
    gap: 2rem;
    height: 600px;
  }

  h2 {
    margin: 0 1rem;
  }

  & .hero-items{
    margin-left: 0rem;

      & .hero-item{
        min-width: 26rem;
      }
    }

}

@media (min-width: 1440px) {

  
  h2 {
    margin: 0 2rem;
  }

  & .hero-items{
      flex-direction: row;

      .hero-item {
        padding: 0 1rem;
        min-width: 24rem;
      }
    }
}
`;