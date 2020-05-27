import styled, { css, keyframes } from 'styled-components';
import ContainerNes from '../../components/ContainerNes';
import TagNes from '../../components/TagNes';
import ButtonNes from '../../components/ButtonNes';

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

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: var(--gap-smaller) var(--gap-small);
  line-height: 1.2;
  text-align: center;
  background-color: var(--color-gray-lighter);
  color: var(--color-gray-dark);
  padding-top: var(--gap-medium);
  font-size: var(--size-big);
`;

const Description = styled.p`
  color: var(--color-gray-lighter);
  padding: var(--gap-medium) var(--gap-small);
  font-family: 'Fira Code', monospace;
  font-size: var(--size-big);
  line-height: 1.2;
  height: 165px;
  overflow: hidden;
`;

const Menu = styled.div`
  margin-top: auto;
  width: 100%;
`;

const Card = styled(ContainerNes)`
  display: flex;
  box-sizing: border-box;
  background-color: var(--color-gray-dark);
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 60vh;
  width: 20vw;
  width: calc(320px - var(--gap-smaller) * 2);
  height: 440px;

  ${TagNes} {
    position: absolute;
    top: 0;
    z-index: 2;
    transform: translateY(-30%);
  }

  ${ButtonNes}:not(:last-child) {
    margin-bottom: var(--gap-small);
  }

  ${(props) =>
    props.shimmerEffect &&
    css`
      position: relative;

      ${TagNes} {
        width: 100px;
        height: 16px;
      }

      ${Title}, ${TagNes}, ${Description}, ${ButtonNes} {
        filter: blur(2px);
      }

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

export { Card, Title, Description, Menu };
