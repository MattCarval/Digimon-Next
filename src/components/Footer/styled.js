import styled from 'styled-components';
import { Glitch, OnlyGlitch, Warning } from '../../../styles/animations';

export const Wrapper = styled.footer`
  background-color: black;
`;

export const Content = styled.div`
  padding-top: 10px;
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
    margin: 10px;
  }
  > a:last-child {
    margin-right: 0;
  }
`;

export const Social = styled.a`
  img {
    opacity: 0.7;
    width: 30px;
    transition: all 0.1s ease-in;
  }

  img:hover {
    cursor: pointer;
    opacity: 1;
    animation: ${OnlyGlitch} 1s ease 0s infinite normal none running;
    transition: all 0.7s ease-in;
  }
`;

export const Created = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    padding-bottom: 15px;
    color: #ff6600;
    animation: ${Warning} infinite 1s;
  }

  > span:hover {
    cursor: default;
    animation: ${OnlyGlitch} infinite 1.2s;
  }
`;
