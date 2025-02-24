import { defaultTheme } from "@/app/styles/theme/default";
import { styled } from "styled-components";

interface WhatsappButtonProps {
  $text?: string | null
}

export const WhatsappButton = styled.a<WhatsappButtonProps>`
  background-color: ${defaultTheme.blue_400};
  color: white;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 8px;
  font-size: 1.25rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &::after {
    content: "${(props) => props.$text || "Fale conosco"}";
  }

  &:hover {
    background-color: ${defaultTheme.blue_600};
  }
`;

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  position: sticky;
  top: 0;
  background-color: ${defaultTheme.white_200};
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);

  & .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    #logoIcon {
      width: 75px;
      height: 75px;
    }

    & .logoInfo {

    & h1 {
      font-size: 2.5rem;
      transition: color 0.3s ease-in-out;
      color: ${defaultTheme.blue_600};
    }
    
    & p:first-of-type {
      line-height: 0;
    }

      & p:last-of-type {
        line-height: 0;
        transition: color 0.3s ease-in-out;

      &:hover {
        color: ${defaultTheme.blue_600};
      }
    }
  }
}

  & .headerInfo {
    display: flex;
    align-items: center;
    gap: 2rem;

    & nav {
      display: flex;
      gap: 1rem;

      &:focus {
        border-radius: 2px;
      }

      & a {
        font-size: 1.25rem;
        transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
        padding: 0.3rem 0.5rem;
        border-radius: 8px;
        border: 1px solid ${defaultTheme.white_200};

        &:hover {
          color: ${defaultTheme.blue_600};
          border: 1px solid ${defaultTheme.blue_600};
        }
      }
    }
  }

  /* Smartphones médios e grandes */
  /* Revisado! */
  @media ((min-width: 375px) or (max-width: 375px))  and (max-width: 768px) {

    & #wppContact {
      display: flex;
      padding: 0.5rem;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      &::after {
        content: "";
        height: 40px;
        width: 40px;
        background: url("/icons/whatsapp.svg") no-repeat center;
      }
    }
  }
/* Revisado! */

/* Smartphones médios e grandes */
@media (min-width: 375px)  or (max-width: 375px) {

  & {
    padding: 1rem 1rem;

    & img {
      display: none;
    }
  }

  & .logoInfo {

    h1 {
      line-height: 1.4;
    }

    & p:first-of-type {
      display: none;
    }

    & p:last-of-type {
      text-align: start;
    }
  }

  .headerInfo {
    & nav {
    display: none;
  }
  }
}

/* Tablets e smartphones no modo paisagem */
@media (min-width: 768px) {

  & .logoInfo {
    & p:first-of-type {
      display: block;
      padding-top: 0.5rem;
    }
  }

}

@media (min-width: 1024px) {

  & {
    padding: 1.25rem 2rem;

  .logo {
    margin: 0;

    & img {
      display: block;
    }

    & p:first-of-type {
    line-height: 1.1;
    }
  
    & p:last-of-type {
    line-height: 1.1;
    text-align: end;
    }
  }
  }

    .headerInfo {
      margin: 0;
      text-align: center;

    & nav {
      display: flex;
      gap: 1rem;

        a {
          font-size: 1rem;
        }
      }

      #wppContact {
        font-size: 1.15rem;
        padding: 0.5 0.75rem;
      }
    }

  }

@media (min-width: 1440px) {

  .logo {
      margin-left: 4rem;
    }

    .headerInfo {
      margin-right: 4rem;
    }

}
`;
