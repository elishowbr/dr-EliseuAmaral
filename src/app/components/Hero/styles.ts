import { styled } from "styled-components";


export const Hero = styled.section`
  width: auto;
  height: 600px;

  padding: 2rem 3.75rem;

  background-image: url("images/mainimg.png");
  background-size: cover;

  && h1 {
    width: 696px;
    font-size: 2.5rem;
    color: #fff;
  }

  & .hero-items {
    display: flex;
    gap: 5rem;
  }

  & .hero-item {
    display: flex;
    background-color: rgba(74, 145, 226, 0.65);
    border-radius: 18px;

    height: 95px;

    // Dificuldade em ajustar o tamanho do container para condizer com o texto me ajuda @elishowbr : TODO
    width: 350px;

    align-items: center;

    position: relative;

    & p {
        color: white;
        font-size: 1.1rem;
        margin-left: 4rem;
        text-align: left;
        display: flex;
    }
  }

  & #circle {
    display: flex;
    background-color: #fff;
    width: 95px;
    height: 95px;
    border-radius: 50%;

    // ajuda a centralizar o ícone
    justify-content: center;
    align-items: center;

    position: absolute;
    left: -35px;
  }
`;