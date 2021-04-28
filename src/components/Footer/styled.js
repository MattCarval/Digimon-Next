import styled from 'styled-components';
import { Glitch, OnlyGlitch, OrangePulse } from '../../../styles/animations';

export const Wrapper = styled.footer`
  background-color: black;
`;

export const Content = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 20%;
  animation: ${Glitch} infinite 1.2s;
  transition: all 0.7s ease;

  :hover {
    cursor: pointer;
    animation: none;
    transform: scale(1.2);
    transition: all 0.7s ease;
  }

  @media (max-width: 540px) {
    width: 60%;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    margin: 10px;
  }
  > a:last-child {
    margin-right: 0;
  }
`;

export const Social = styled.a`
  img {
    filter: grayscale() brightness(2);
    animation: ${OnlyGlitch} infinite 1.2s;
    width: 30px;
    transition: all 0.7s ease-in;
  }

  img:hover {
    cursor: pointer;
    filter: none;
    animation: ${OrangePulse} infinite 1.2s;
    transition: all 0.7s ease-in;
  }
`;

export const Created = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    margin: 15px 0;
    color: #ff6600;
  }

  > span:hover {
    cursor: default;
    animation: ${OrangePulse} infinite 1.2s;
  }
`;
