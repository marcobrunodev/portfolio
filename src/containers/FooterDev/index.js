import React from 'react';
import { Footer, Navigation } from './styles';
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

const FooterDev = () => (
  <Footer as="footer">
    <Navigation>
      {medias.map(({ href, what }) => (
        <SocialMedia key={what} href={href} what={what} />
      ))}
    </Navigation>

    <p>@MarcoBrunoDev</p>
  </Footer>
);

export default FooterDev;
