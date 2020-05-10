import styled, { css } from 'styled-components';

const ButtonNes = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 45rem;
  font-size: var(--size-medium);
  color: var(--color-gray-lighter);
  background-color: var(--color-primary-medium);
  text-decoration: none;
  border: none;

  ${({ twitch }) =>
    twitch &&
    css`
      background-color: var(--color-secondary-medium);
    `}

  ${({ share }) =>
    share &&
    css`
      background-color: var(--color-tertiary-medium);
    `}

  &::selection {
    background-color: transparent;
  }

  &:hover {
    background-color: var(--color-primary-dark);

    ${({ twitch }) =>
      twitch &&
      css`
        background-color: var(--color-secondary-dark);
      `}

    ${({ share }) =>
      share &&
      css`
        background-color: var(--color-tertiary-dark);
      `}
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-gray-medium);
    opacity: 0.5;
  }

  &::before {
    width: 100%;
    height: var(--size-border);
    bottom: 0;
    transform-origin: center bottom;
  }

  &::after {
    width: var(--size-border);
    height: calc(100% - var(--size-border));
    right: 0;
    top: 0;
    transform-origin: right top;
  }

  &:hover::before {
    transform: scaleY(1.6);
  }

  &:hover::after {
    transform: scale(1.6, 0.95);
  }

  &:active::before {
    top: 0;
  }

  &:active::after {
    top: auto;
    bottom: 0;
    left: 0;
    transform: scale(1);
  }
`;

export default ButtonNes;
