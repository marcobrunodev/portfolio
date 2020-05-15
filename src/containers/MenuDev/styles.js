import styled, { css } from 'styled-components';
import { mickeyHover } from '../../styles/settings/Cursor';
import menu from '../../img/icons/menu.png';
import close from '../../img/icons/close.png';
import ButtonNes from '../../components/ButtonNes';

const Action = styled(ButtonNes)`
  color: var(--color-gray-lighter);
  text-decoration: none;
  margin-bottom: var(--gap-small);

  @media (min-width: 500px) {
    margin: 0 var(--gap-smaller) var(--gap-smaller);
  }
`;

const Close = styled.img.attrs({ src: close })`
  cursor: url(${mickeyHover}) 14 0, pointer;
  margin-bottom: var(--gap-big);
  width: 45px;
  align-self: flex-end;

  &:hover {
    transform: scale(1.1);
  }
`;

const Icon = styled.img.attrs({ src: menu })`
  height: 75%;
  width: 50px;
  cursor: url(${mickeyHover}) 14 0, pointer;
`;

const Buttons = styled.div`
  @media (min-width: 500px) {
    display: flex;
  }
`;

const Medias = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: var(--gap-medium);
  right: 0;
  left: 0;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: var(--color-gray-dark);
  padding: var(--gap-medium);
  transition: transform 150ms linear;

  ${({ active }) =>
    !active &&
    css`
      transform: translateY(-100%);
    `};
`;

const Wrapper = styled.div`
  & > ${Navigation} {
    position: fixed;
    z-index: 10;
  }
`;

export { Action, Close, Icon, Navigation, Wrapper, Buttons, Medias };
