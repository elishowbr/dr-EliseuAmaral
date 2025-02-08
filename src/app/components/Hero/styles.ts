import { styled } from "styled-components";


export const Hero = styled.section`
  height: 600px;
  width: auto;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  user-select: none;

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
    justify-content: flex-end;
    gap: 5rem;
  }

  & .hero-item {
    display: flex;
    background-color: rgba(74, 145, 226, 0.65);
    border-radius: 18px;

    // Dificuldade em ajustar o tamanho do container para condizer com o texto me ajuda @elishowbr : TODO
    height: 95px;
    width: 350px;
    align-items: center;
    position: relative;

    & #circle {
    display: flex;
    background-color: #fff;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: -35px;
  }

    & p {
        color: white;
        font-size: 1.1rem;
        margin: 0 1rem 0 4rem;
    }
  }

  
`;