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

    /* Smartphones médios e grandes */
@media (min-width: 375px) and (max-width: 768px){
    padding: 2rem 1rem;
    & ul {
        padding: 0;
        gap: 0;
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        gap: 16px;
        justify-content: initial;
        & li{
            
        }
    }
}
/* Tablets e smartphones no modo paisagem */
@media (min-width: 768px) {

}

@media (min-width: 1024px) {

    &{
        padding: 0;
    }

}

@media (min-width: 1440px) {

    &{
        padding-inline: 6rem;
    }

}
`