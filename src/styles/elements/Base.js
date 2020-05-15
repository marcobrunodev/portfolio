import { createGlobalStyle } from 'styled-components';
import { mickey, mickeyHover } from '../settings/Cursor';

const Base = createGlobalStyle`
  html {
    font-size: 1px;
    cursor: url(${mickey}),auto;
  }

  a:hover, button:hover {
    cursor: url(${mickeyHover}) 14 0,pointer;
  }

  body {
    padding-top: calc(var(--size-header) + var(--gap-medium));
    font-size: var(--size-medium);
    font-family: 'Press Start 2P', cursive;
    min-width: 320px;
    background-color: var(--color-gray-light);
  }
`;

export default Base;
