import styled from 'styled-components';
import { Glitch, OrangePulse, Warning } from '../../../styles/animations';

export const Wrapper = styled.header`
  padding: 1.25rem 0;
  background-color: black;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 20%;
  animation: ${Glitch} 1s ease 0s infinite normal none running;

  :hover {
    cursor: default;
    animation: none;
    transform: scale(1.15);
  }

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

export const Redirect = styled.h1`
  color: white;
  font-size: 1.875rem;
  animation: ${Warning} infinite 1s;

  :hover {
    cursor: pointer;
    animation: ${OrangePulse} 1s ease 0s infinite normal none running;
  }

  @media (max-width: 540px) {
    font-size: 1.25rem;
  }
`;
