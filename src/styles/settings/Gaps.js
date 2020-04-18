import { createGlobalStyle } from 'styled-components';

const Gaps = createGlobalStyle`
  :root{
    --gap-smaller: 5rem;
    --gap-small: 10rem;
    --gap-medium: 20rem;
    --gap-big: 40rem;
    --gap-bigger: 80rem;
  }
`;

export default Gaps;