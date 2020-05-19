import React, { useState } from 'react';
import { Icon, Navigation, Close, Action, Wrapper, Buttons, Medias } from './styles';
import SocialMedia from '../../components/SocialMedia';

const medias = [
  {
    what: 'twitch',
    href: 'https://twitch.com/marcobrunodev',
  },
  {
    what: 'discord',
    href: 'http://bit.ly/discord-collabcode',
  },
  {
    what: 'twitter',
    href: 'https://twitter.com/marcobrunodev',
  },
  {
    what: 'github',
    href: 'https://github.com/marcobrunodev',
  },
];

const MenuDev = () => {
  const [menuActive, setMenuActive] = useState(false);

  function changeMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <Wrapper>
      <Icon onClick={changeMenu} />
      <Navigation onClick={changeMenu} active={menuActive}>
        <Close />
        <Buttons>
          <Action to="/lives">Agenda</Action>
          <Action to="/projects">Posts</Action>
          <Action to="/projects">Projetos</Action>
          <Action to="/">Sobre</Action>
        </Buttons>

        <Medias>
          {medias.map(({ href, what }) => (
            <SocialMedia key={what} href={href} what={what} />
          ))}
        </Medias>
      </Navigation>
    </Wrapper>
  );
};

export default MenuDev;
