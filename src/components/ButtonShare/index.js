import React from 'react';
import PropTypes from 'prop-types';
import ButtonNes from '../ButtonNes';

const isSupported = () => (navigator && navigator.share && true) || false;

const shareWithWebApi = (event) => {
  event.preventDefault();

  navigator
    .share({
      title: 'LiveCoding na Twitch',
      text: 'LiveCoding sobre JavaScript, HTML e CSS',
      url: 'https://twitch.tv/marcobrunodev',
    })
    .then(function () {
      console.log('Funcionou!!');
    })
    .catch(function (err) {
      console.error(err);
    });
};

const ButtonShare = ({ changeActiveShareModal }) => {
  return isSupported() ? (
    <ButtonNes share as="a" onClick={shareWithWebApi}>
      Compartilhar
    </ButtonNes>
  ) : (
    <ButtonNes share onClick={changeActiveShareModal}>
      Compartilhar
    </ButtonNes>
  );
};

ButtonShare.propTypes = {
  changeActiveShareModal: PropTypes.func.isRequired,
};

export default ButtonShare;
