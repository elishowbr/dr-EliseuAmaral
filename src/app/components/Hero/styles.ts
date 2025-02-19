import { defaultTheme } from "@/app/styles/theme/default";
import { styled } from "styled-components";

export const Hero = styled.section`
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3) inset;
  background-image: url("images/foto.jpg");
  background-size: cover;

  & h2 {
    margin-left: 2rem;
    width: 696px;
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
    width: 21rem;
    align-items: center;
    position: relative;
    padding: 0 1rem 0 4rem;
    transition: background-color 0.3s ease-in-out;

    & #circle {
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${defaultTheme.heroCard};
    position: absolute;
    transition: background-color 0.3s ease-in-out;

    & svg {
      fill: ${defaultTheme.white};
    }
  }

    &:hover {
      background-color: ${defaultTheme.blue_600};

      p {
        color: ${defaultTheme.white};
      }

      & #circle {
      background-color: ${defaultTheme.blue_600};
    }
  }

    & p {
      color: ${defaultTheme.white_200};
      transition: color 0.3s ease-in-out;
      font-size: 1rem;
      margin-left: 2rem;
    }

}
}



/* Revisado! */
/* Smartphones médios e grandes */
@media (min-width: 375px) {
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

      & .hero-item{
        height: 80px;
        width: 26rem;

        #circle {
          left: 0.5rem;

          svg {
            width: 75px;
            height: 75px;
          }
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
    margin-top: 2rem;
  }


}

@media (min-width: 1024px) {

  & {
    padding: 2rem 4rem;
    gap: 2rem;
    height: 600px;
  }

  h2 {
    margin: 0 2rem;
  }

  & .hero-items{

      & .hero-item{
        height: 95px;

        #circle {
          left: -2rem;
          width: 95px;
          height: 95px;
        }

        & p {
        margin-left: 0;
        }
      }

    }

}

@media (min-width: 1440px) {
  & .hero-items{
      flex-direction: row;

      .hero-item {
        width: 20rem;
      }
    }
}

`;