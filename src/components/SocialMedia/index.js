import React from 'react';
import PropTypes from 'prop-types';
import instagram from '../../img/social-media/instagram.png';
import linkedin from '../../img/social-media/linkedin.png';
import twitch from '../../img/social-media/twitch.png';
import twitter from '../../img/social-media/twitter.png';
import youtube from '../../img/social-media/youtube.png';
import github from '../../img/social-media/github.png';
import discord from '../../img/social-media/discord.png';
import facebook from '../../img/social-media/facebook.png';
import { Icon, Action } from './styles';

const isAction = (src, href) => {
  return href ? (
    <Action href={href}>
      <Icon src={src} />
    </Action>
  ) : (
    <Icon src={src} />
  );
};

const SocialMedia = ({ what, href }) => {
  const socialMedias = {
    instagram,
    linkedin,
    twitch,
    twitter,
    youtube,
    github,
    discord,
    facebook,
  };

  return isAction(socialMedias[what], href);
};

SocialMedia.defaultProps = {
  href: '',
};

SocialMedia.propTypes = {
  what: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default SocialMedia;
