import styled from 'styled-components';

const Textarea = styled.textarea`
  border: var(--size-border) solid var(--color-gray-lighter);
  color: var(--color-gray-lighter);
  height: 100px;
  font: inherit;
  background-color: var(--color-gray-medium);
  padding: var(--gap-small);
  resize: vertical;

  &:focus {
    border-color: var(--color-secondary-medium);
  }
`;

export default Textarea;
