import { defaultTheme } from '@/app/styles/theme/default';
import { styled } from 'styled-components'

export const ContactSection = styled.section` 
    margin: 1rem 8rem 4rem 8rem;

    & section + footer {
        margin-top: 25rem !important;
    }

    & h2 {
        color: ${defaultTheme.blue_600};
    }

    & #contact-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1rem;

        background-color: ${defaultTheme.blue_400};
        border-radius: 8px;

        & ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.75rem;

            & li {
                display: flex;
                gap: 0.75rem;
                
                & a {
                    color: white;

                    &:hover {
                        text-decoration: underline;
                        color: white;
                    }
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