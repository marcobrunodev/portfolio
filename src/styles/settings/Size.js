import { createGlobalStyle } from 'styled-components';

const Size = createGlobalStyle`
  :root {
    --size-smaller: 8rem;
    --size-small: 12rem;
    --size-medium: 16rem;
    --size-big: 22rem;
    --size-bigger: 34rem;
  }
`;

export default Size;