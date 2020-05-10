import styled from 'styled-components';
import MsgError from '../MsgError';

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-big);

  & > ${MsgError} {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
  }
`;

const Content = styled.span`
  margin-bottom: var(--gap-smaller);
`;

const Input = styled.input`
  border: var(--size-border) solid var(--color-gray-lighter);
  color: var(--color-gray-lighter);
  height: 30px;
  font: inherit;
  background-color: var(--color-gray-medium);
  padding: var(--gap-smaller) var(--gap-small);

  &:focus {
    border-color: var(--color-secondary-medium);
  }
`;

export { Label, Content, Input };
