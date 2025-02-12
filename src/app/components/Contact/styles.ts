import { styled } from 'styled-components'

export const ContactSection = styled.section` 
    margin: 1rem 7.5rem 3.75rem;

    & h2 {
        color: ${props => props.theme['blue-600']};
    }

    & #contact-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1rem;

        background-color: ${props => props.theme['blue-400']};
        border-radius: 8px;

        & ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 12px;

            & li,a {
                display: flex;
                gap: 12px;
                color: white;

                & a {
                    text-decoration: underline;
                }
            }
        }

        & .contact-map {
            border-radius: 8px;
            width: 50%;
            height: 400px;
        }
    }
`;  