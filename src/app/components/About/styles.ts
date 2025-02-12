import styled from 'styled-components'

export const AboutMe = styled.section`
  display: flex;
  padding-inline: 120px;
  padding-block: 6rem;

  justify-content: space-between;

  & #imgProfile {
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.5);
  }

  & #containerAbout {
    max-width: 615px;

    & h2{
    color: ${props => props.theme['blue-600']};
    letter-spacing: 1px;
    margin-bottom: 26px;
  }

    & p {
      line-height: 1.5;
    }
  }
`;