import React from 'react';
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
    <ButtonNes as="a" onClick={shareWithWebApi}>
      Compartilhar
    </ButtonNes>
  ) : (
    <ButtonNes share onClick={changeActiveShareModal}>
      Compartilhar N
    </ButtonNes>
  );
};

export default ButtonShare;
