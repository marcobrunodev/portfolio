import styled, { css, keyframes } from 'styled-components';
import ContainerNes from '../../components/ContainerNes';
import TagNes from '../../components/TagNes';

const turnTurn = keyframes`
  0% {
    transform: rotate(0deg) scale(1.2) translate(-50%, -50%);
    opacity: 1;
  }
  20% {
    transform: rotate(72deg) translate(-50%, -50%);
    opacity: 0.8;
  }
  50% {
    transform: rotate(144deg) scale(1.2) translate(-50%, -50%);
    opacity: 1;
  }
  80% {
    transform: rotate(216deg) translate(-50%, -50%);
    opacity: 0.8;
  }
  100% {
    transform: rotate(360deg) scale(1.2) translate(-50%, -50%);
    opacity: 1;
  }
`;
const Card = styled(ContainerNes)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 320px;
  height: 320px;

  & > ${TagNes} {
    position: absolute;
    top: 0;
    transform: translateY(-30%);
    order: 0;
    z-index: 5;
  }

  ${({ shimmerEffect }) =>
    shimmerEffect &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        background-color: var(--color-secondary-medium);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: left top;
        animation: 2.5s ${turnTurn} linear infinite;
        box-shadow: 0px 0px 2px 2px var(--color-gray-light);
      }
    `}
`;

const Item = styled.dd`
  &:not(:last-child) {
    margin-bottom: var(--gap-medium);
  }
`;

export { Card, Item };
