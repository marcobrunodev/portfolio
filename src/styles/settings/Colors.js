import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-primary-dark: #d04154;
    --color-primary-medium: #f25a6f;

    --color-secondary-dark: #63497d;
    --color-secondary-medium: #7c5e99;

    --color-tertiary-dark: #4e9859;
    --color-tertiary-medium: #62C370;

    --color-gray-dark: #212529;
    --color-gray-medium: #2f3439;
    --color-gray-light: #3f454c;
    --color-gray-lighter: #fff;

    --color-title: #F5D547;
    --color-link: #20A4F3;
  }
`;

export default Colors;
