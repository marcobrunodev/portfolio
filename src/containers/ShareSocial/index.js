import React from 'react';
import { TwitterShareButton, LinkedinShareButton, FacebookShareButton } from 'react-share';
import PropTypes from 'prop-types';
import ContainerNes from '../../components/ContainerNes';
import TitleNes from '../../components/TitleNes';
import Share from './styles';
import SocialMedia from '../../components/SocialMedia';

const buttonsSocial = {
  twitter: (what, { title, url, via, hashtags }) => (
    <TwitterShareButton title={title} via={via} hashtags={hashtags} url={url}>
      <SocialMedia key={what} what={what} />
    </TwitterShareButton>
  ),
  linkedin: (what, { title, url }) => (
    <LinkedinShareButton title={title} url={url}>
      <SocialMedia key={what} what={what} />
    </LinkedinShareButton>
  ),
  facebook: (what, { quote, url }) => (
    <FacebookShareButton quote={quote} url={url}>
      <SocialMedia key={what} what={what} />
    </FacebookShareButton>
  ),
};

const ShareSocial = ({ title, url, via, hashtags, active, changeActive }) => {
  const medias = [
    {
      what: 'twitter',
      propsButton: {
        title,
        url,
        hashtags,
        via,
      },
    },
    {
      what: 'linkedin',
      propsButton: { title, url },
    },
    {
      what: 'facebook',
      propsButton: {
        quote: title,
        url,
      },
    },
  ];

  return (
    <Share onClick={changeActive} active={active}>
      <ContainerNes>
        <TitleNes>Compartilhe com pessoas felizes!</TitleNes>

        {medias.map(({ what, propsButton }) => buttonsSocial[what](what, propsButton))}
      </ContainerNes>
    </Share>
  );
};

ShareSocial.defaultProps = {
  via: 'marcobrunodev',
  hashtags: ['LiveCoding'],
};

ShareSocial.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  via: PropTypes.string,
  hashtags: PropTypes.arrayOf(String),
  active: PropTypes.bool.isRequired,
  changeActive: PropTypes.func.isRequired,
};

export default ShareSocial;
