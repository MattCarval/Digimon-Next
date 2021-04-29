import styled from 'styled-components';
import { Glitch } from '../../../styles/animations';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  width: 300px;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
  box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.7);

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
    margin: 10px 0;
  }

  @media (max-width: 540px) {
    width: 130px;
    padding: 10px;
    margin: 10px;

    h1 {
      font-size: 10px;
    }
  }
`;
