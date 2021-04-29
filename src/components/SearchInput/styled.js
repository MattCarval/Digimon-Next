import styled, { css } from 'styled-components';

export const Container = styled.label`
  height: 3.75rem;
  width: 50%;
  border: 0.2rem solid transparent;
  border-radius: 1.25rem;
  box-shadow: 0.8rem 0.8rem 3.2rem rgba(0, 0, 0, 0.05);
  padding-left: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  color: #ccc;
  overflow: hidden;
  border-color: black;
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff6600;
      color: #ff6600;
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff6600;
    `}
  input {
    background-color: none;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    flex: 1;
    color: #ff6600;
    padding-right: 1.6rem;
    &::placeholder {
      color: #ccc;
    }
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`;
