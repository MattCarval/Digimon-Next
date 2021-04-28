import { keyframes } from 'styled-components';

export const Glitch = keyframes`
  0% {
    filter: contrast(200%) invert(7%) sepia(91%) saturate(6510%) hue-rotate(297deg) brightness(92%) contrast(111%);
    transform: scale(1.02) skewX(-20deg);
    opacity: 0.7;
  }

  5%{
    transform: skewX(20deg);
  }

  10% {
    filter: invert(59%) sepia(33%) saturate(6459%) hue-rotate(85deg) brightness(120%) contrast(122%);
    transform: skewX(-20deg);
    opacity: 0.5;
  }

  15%{
    transform: skewX(20deg);
  }

  50% {
    filter: invert(82%) sepia(66%) saturate(2569%) hue-rotate(121deg) brightness(102%) contrast(104%);
    transform: scale(1) skewX(0deg);
    opacity: 0.3;
  }

  100% {
    filter: none;
    transform: none;
    opacity: none;
  }
`;

export const OnlyGlitch = keyframes`
0% {
  transform: scale(1.02) skewX(-20deg);
  opacity: 0.7;
}

5%{
  transform: skewX(20deg);
}

10% {
  transform: skewX(-20deg);
  opacity: 0.5;
}

15%{
  transform: skewX(20deg);
}

50% {
  transform: scale(1) skewX(0deg);
  opacity: 0.3;
}

100% {
  transform: none;
  opacity: none;
}
`;

export const OrangePulse = keyframes`
  0% {
  transform: scale(1);
  color: white;
  transition: all 1s ease-in;
  }

  50%{
  transform: scale(1.05);
  color: #ff6600;
  transition: all 1s ease-in;
  }

  100%{
  transform: scale(1.15);
  color: #ff6600;
  transition: all 1s ease-in;
  }
`;

export const Warning = keyframes`
0% {
color: white;
transition: all 1s ease-in;
}

100%{
color: #ff6600;
transition: all 1s ease-in;
}
`;
