import React from 'react';
import HeaderDev from '../../containers/HeaderDev';
import TitleNes from '../../components/TitleNes';
import InfosLive from '../../containers/InfosLive';
import FooterDev from '../../containers/FooterDev';
import photoLive from '../../img/live-28-04-2020.png';
import photoGuest from '../../img/marcos-castro.png';

const live = {
  title: '#05 Curso de FrontEnd com HTML, CSS e JavaScript',
  goals: ['- pseudo-class', '- pseudo-element', '- box-shadow', '- border-radius'],
  photo: photoLive,
  altPhoto: 'Live do dia 28/04/2020',
  day: '28/04/2020',
  hour: '19hrs até 22hrs',
  description: `Se você tem dificuldade para usar algumas propridades do CSS3, nessa aula veremos o
  funcionamento de propriedades e seletores como: pseudo-class, pseudo-element,
  box-shadow, text-shadow e border-radius. Além do que você pode tirar suas dúvidas ao
  vivo.`,
  guest: {
    name: 'Marcos Castro',
    photo: photoGuest,
  },
};

const LiveDetails = () => {
  const { title, goals, photo, altPhoto, day, hour, description, guest } = live;

  return (
    <>
      <HeaderDev />
      <TitleNes>{title}</TitleNes>

      <InfosLive
        photo={photo}
        altPhoto={altPhoto}
        goals={goals}
        day={day}
        hour={hour}
        description={description}
        guest={guest}
      />

      <FooterDev />
    </>
  );
};

export default LiveDetails;
