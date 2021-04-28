import styled from 'styled-components';
import { Glitch, OrangePulse } from '../../../styles/animations';

export const Wrapper = styled.header`
  padding: 20px 0;
  background-color: black;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 20%;

  @media (max-width: 540px) {
    width: 50%;
  }
`;

export const Redirect = styled.h1`
  color: white;
  font-size: 30px;
  animation: ${Glitch} infinite 1s;

  :hover {
    cursor: pointer;
    animation: ${OrangePulse} infinite 1s;
  }

  @media (max-width: 540px) {
    font-size: 20px;
  }
`;