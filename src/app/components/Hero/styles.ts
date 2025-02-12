import { styled } from "styled-components";


export const Hero = styled.section`
  height: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  user-select: none;

  padding: 1.5rem 4rem;
  background-image: url("images/mainimg.png");
  background-size: cover;

  & h1 {
    margin-left: 2rem;
    width: 696px;
    font-size: 2.5rem;
    color: #fff;
  }

  & .hero-items {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
  }

  & .hero-item {
    display: flex;
    background-color: rgba(74, 145, 226, 0.65);
    border-radius: 18px;

    // Dificuldade em ajustar o tamanho do container para condizer com o texto me ajuda @elishowbr : TODO
    height: 85px;
    width: 350px;
    align-items: center;
    position: relative;
    padding: 0 1rem 0 4rem;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #154277;
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
    background-color: #fff;

    position: absolute;
    left: -2.5rem;
  }
  }

  @media (max-width: 1280px) {

    & h1 {
      margin: 0 !important;
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

  @media (max-width: 1920px) {
    && h1 {
      margin-left: 4rem;
    }
  }
`;