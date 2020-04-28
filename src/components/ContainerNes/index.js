import styled from 'styled-components';
import _containers from '../../styles/tools/_containers';

const ContainerNes = styled.section`
  ${_containers('internal')};
  position: relative;
  background-color: var(--color-gray-dark);
  color: var(--color-gray-lighter);
  font-size: var(--size-medium);
  padding: calc(var(--size-border) + var(--gap-smaller) * 2);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    width: calc(100% - var(--gap-small));
    height: calc(100% - var(--gap-small));
    border: var(--size-border) solid var(--color-gray-lighter);
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export default ContainerNes;
