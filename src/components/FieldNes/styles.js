import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: var(--gap-big);
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
