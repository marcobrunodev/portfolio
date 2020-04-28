import styled from 'styled-components';

const TextNes = styled.p`
  font-size: var(--size-small);
  line-height: 1.8em;
  color: var(--color-gray-lighter);

  @media (min-width: 700px) {
    font-size: var(--size-medium);
  }
`;

export default TextNes;
