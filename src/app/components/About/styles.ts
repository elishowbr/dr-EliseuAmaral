import styled, {} from 'styled-components'

export const AboutMe = styled.section`
  display: flex;
  margin-inline: 120px;
  margin-block: 8rem;

  justify-content: space-between;

  & #imgProfile {
    border-radius: 8px;
    object-fit: cover;
  }

  & #containerAbout {
    max-width: 615px;

    & h2{
        color: ${props => props.theme['blue-600']};
        margin-bottom: 26px;
    }
  }
`;