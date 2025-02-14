import { defaultTheme } from "@/app/styles/theme/default";
import { styled } from "styled-components";

export const Hero = styled.section`
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3) inset;
  padding: 1.5rem 4rem;
  background-image: url("images/foto.jpg");
  background-size: cover;

  & h1 {
    margin-left: 2rem;
    width: 696px;
    font-size: 2.5rem;
    color: ${defaultTheme.blue_600}
  }

  & .hero-items {
    display: flex;
    justify-content: space-around;
    padding: 0 2rem;
  }

  & .hero-item {
    display: flex;
    background-color: rgba(74, 145, 226, 0.65);
    border-radius: 18px;

    height: 6rem;
    width: 21rem;
    align-items: center;
    position: relative;
    padding: 0 1rem 0 4rem;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${defaultTheme.blue_600};
    }

    & p {
        color: white;
        font-size: 1.1rem;
    }

    & #circle {
    display: flex;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${defaultTheme.white};

    position: absolute;
    left: -2.5rem;
  }
  }

/* Smartphones médios e grandes */
@media (min-width: 375px) {

}

/* Tablets e smartphones no modo paisagem */
@media (min-width: 768px) {

}

  @media (min-width: 1024px) {

  & h1 {
    margin: 0;
  }

    & .hero-items {
      margin: 0;
      padding: 0;
      justify-content: space-around;

      & .hero-item {
        max-width: 20rem;

      & p {
        font-size: 1rem;
      }
    }
  }
}

@media (min-width: 1440px) {

& h1 {
      margin-left: 6rem;
    }
}

`;