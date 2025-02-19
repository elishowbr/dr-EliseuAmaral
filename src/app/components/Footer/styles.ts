import { defaultTheme } from "@/app/styles/theme/default";
import styled from "styled-components";

export const Footer = styled.footer`
box-shadow: 0px 5px 3px rgba(0,0,0,0.2) inset;

    ul {
        display: flex;
        justify-content: space-between;
        padding: 2rem 8rem;

        & li {
            display: flex;
            flex-direction: column;
            gap: 2px;

            & h3 {
                color: ${defaultTheme.blue_600};
                font-weight: 600;
                user-select: none;
            }
            
            & a:hover {
                text-decoration: underline;
            }
        }
    }


/* Revisado! */
/* Smartphones médios e grandes */
@media (min-width: 375px) {
    padding: 2rem 3rem;

    & ul {
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        gap: 2rem;
    }
}

/* Tablets e smartphones no modo paisagem */
@media (min-width: 768px) {

}

@media (min-width: 1024px) {

    &{
        padding: 2rem 6rem;
    }

    ul {
        display: flex;
        justify-content: space-between;
        }
    }


@media (min-width: 1440px) {

}
`