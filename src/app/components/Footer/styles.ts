import styled from "styled-components";

export const Footer = styled.footer`

box-shadow: 0px -5px 3px rgba(0,0,0,0.2);


    ul {
        display: flex;
        justify-content: space-between;
        padding: 2rem 8rem;

        & li {
            display: flex;
            flex-direction: column;
            gap: 2px;

            & h3 {
                color: ${(props) => props.theme["blue-600"]};
                font-weight: 600;
            }
            
            & a:hover {
                text-decoration: underline;
            }
        }
    }
`