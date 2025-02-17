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
  padding: 1.25rem 4rem;
  justify-content: space-between;
  user-select: none;

  & .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

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
  @media (min-width: 375px) and (max-width: 767px) {
    padding: 1.25rem 2rem;

    & .headerInfo > nav {
      display: none;
    }

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

/* Smartphones médios e grandes */
@media (min-width: 375px) and (max-width: 767px){

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

  & nav {
    display: none !important;
  }

}

  /* Tablets e smartphones no modo paisagem */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 1.25rem 2rem;

    & .headerInfo > nav {
      display: none;
    }
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    & {
      padding: 2rem 2rem;
    }

    // Não entendi pra que serve o line height, por isso removi e
    // incrementei o espaçamento que ele causava com Padding

    .headerInfo {
      margin: 0;
      text-align: center;

      & nav {
        gap: 0;

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
