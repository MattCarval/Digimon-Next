import styled from 'styled-components';
import { Glitch } from '../../../styles/animations';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.125rem solid black;
  width: 18.75rem;
  border-radius: 1.25rem;
  margin: 1.25rem;
  padding: 1.25rem;
  box-shadow: 0.625rem 0.625rem 0.5rem rgba(0, 0, 0, 0.7);

  :hover {
    animation: ${Glitch} 1s ease 0s normal none running;
    cursor: default;
    transform: scale(1.15);
  }

  > h1 {
    color: #ff6600;
  }

  img {
    width: 100%;
  }

  > * + * {
    margin: 0.625rem 0;
  }

  @media (max-width: 540px) {
    width: 8.125rem;
    padding: 0.625rem;
    margin: 0.625rem;

    h1 {
      font-size: 0.625rem;
    }
  }
`;
