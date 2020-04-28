import styled from 'styled-components';

const ActionNes = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: var(--color-link);
  text-decoration: none;
  transition: color 100ms linear;

  &::after {
    content: '';
    position: absolute;
    bottom: 3px;
    background-color: var(--color-link);
    width: 100%;
    height: 80%;
    transform-origin: bottom center;
    transform: scaleY(0.08);
    z-index: -1;
    transition: transform 100ms linear;
  }

  &:hover {
    color: var(--color-gray-lighter);
  }

  &:hover::after {
    transform: scaleY(1);
  }
`;

export default ActionNes;
