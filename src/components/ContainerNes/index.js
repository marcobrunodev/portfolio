import styled from 'styled-components';
import _containers from '../../styles/tools/_containers';

export const ContainerNes = styled.section`
  --border-width: 4px;
  ${_containers('internal')};
  box-sizing: border-box;
  position: relative;
  background-color: var(--color-gray-dark);
  color: var(--color-gray-lighter);
  font-size: var(--size-medium);
  padding: calc(var(--border-width) + var(--gap-small) * 2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    width: calc(100% - var(--gap-small));
    height: calc(100% - var(--gap-small));
    border: var(--border-width) solid var(--color-gray-lighter);
  }
`;