import styled from 'styled-components';
import { Glitch, OnlyGlitch, Warning } from '../../../styles/animations';

export const Wrapper = styled.footer`
  background-color: black;
`;

export const Content = styled.div`
  padding-top: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 20%;
  animation: ${Glitch} 1s ease 0s infinite normal none running;
  transition: all 0.3s ease;

  :hover {
    cursor: pointer;
    animation: none;
    transform: scale(1.2);
    transition: all 0.7s ease;
  }

  @media (max-width: 540px) {
    width: 50%;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    margin: 0.625rem;
  }
  > a:last-child {
    margin-right: 0;
  }
`;

export const Social = styled.a`
  img {
    filter: grayscale() brightness(2);
    width: 1.875rem;
    transition: all 0.1s ease-in;
  }

  img:hover {
    cursor: pointer;
    filter: none;
    animation: ${OnlyGlitch} 1s ease 0s infinite normal none running;
    transition: all 0.7s ease-in;
  }
`;

export const Created = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    padding-bottom: 0.938rem;
    color: #ff6600;
    animation: ${Warning} infinite 1s;
  }

  > span:hover {
    cursor: default;
    animation: ${OnlyGlitch} infinite 1.2s;
  }
`;
