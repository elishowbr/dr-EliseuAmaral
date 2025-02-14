import { defaultTheme } from '@/app/styles/theme/default';
import { styled } from 'styled-components'

export const ContactSection = styled.section` 
    margin: 1rem 6rem 4rem 6rem;

    & h2 {
        color: ${defaultTheme.blue_600};
    }

    & #contact-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 1rem;
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
            height: 25rem;
        }
    }

@media (max-width: 1920px) {
    &{
        padding-inline: 6rem;
    }
}

@media (max-width: 1280px) {
    &{
        padding: 0;
    }
}
`;  