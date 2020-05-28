import React, { useEffect } from 'react';
import TitleNes from '../../components/TitleNes';
import InfosLive from '../../containers/InfosLive';
import photoLive from '../../img/live-28-04-2020.png';
import Template from '../Template';

const live = {
  title: 'twitch.tv/marcobrunodev',
  goals: ['- Clip-path', '- efeitos 3D', '- CSS Generativo'],
  day: '15/05/2020',
  hour: '10:10 até 12:10',
  description: `Se está começando seus estudos de #CSS, essa é uma ótima oportunidade de
  estudar e também criar a sua página pessoal e já ter algo para aprensentar na sua próxima entrevista
  de emprego. Serão 5 dias de conteúdo feitos pela Vanessa Tonini e a Juliana Amoasei e durante a live
  vou aprender com elas e fazer os execícios junto com vocês. Chega mais e bora criar um grupo de
  estudo`,
};

const LiveDetails = () => {
  const { title, goals, day, hour, description, guest } = live;

  return (
    <Template>
      <TitleNes>{title}</TitleNes>

      <InfosLive goals={goals} day={day} hour={hour} description={description} guest={guest} />
    </Template>
  );
};

export default LiveDetails;
