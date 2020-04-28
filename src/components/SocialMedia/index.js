import React from 'react';
import instagram from '../../img/social-media/instagram.png';
import linkedin from '../../img/social-media/linkedin.png';
import twitch from '../../img/social-media/twitch.png';
import twitter from '../../img/social-media/twitter.png';
import youtube from '../../img/social-media/youtube.png';
import github from '../../img/social-media/github.png';
import discord from '../../img/social-media/discord.png';
import { Icon, Action } from './styles';

const SocialMedia = ({ what, href }) => {
  const socialMedias = {
    instagram,
    linkedin,
    twitch,
    twitter,
    youtube,
    github,
    discord,
  };

  return (
    <Action href={href}>
      <Icon src={socialMedias[what]} />
    </Action>
  );
};

export default SocialMedia;
