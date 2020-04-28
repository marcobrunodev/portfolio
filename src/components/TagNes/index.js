import styled from 'styled-components';

const TagNes = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  background-color: var(--color-primary-medium);
  padding: var(--gap-small) var(--gap-medium);

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    z-index: 2;
    background-color: var(--color-primary-medium);
    height: 68%;
    width: calc(var(--size-border) * 1.4);
  }
  &::before {
    left: 0;
    transform: translateX(-100%);
  }
  &::after {
    right: 0;
    transform: translateX(100%);
  }
`;

export default TagNes;
