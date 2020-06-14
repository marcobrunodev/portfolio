import React from 'react';
import ButtonNes from '../ButtonNes';

const isSupported = () => (navigator && navigator.share && true) || false;

const ButtonShare = () => {
  console.log(navigator.share);
  console.log(window.navigator);
  console.log('isSupported', isSupported());

  return <ButtonNes>Compartilhar futuro</ButtonNes>;
};

export default ButtonShare;
