import React, { useEffect, useState } from 'react';
import TitleNes from '../../components/TitleNes';
import InfosLive from '../../containers/InfosLive';
import Template from '../Template';
import service from '../../services/lives.service';
import { formatDate, getHour } from '../../libs/date';

const LiveDetails = () => {
  const [live, setLive] = useState({
    title: 'twitch.tv/marcobrunodev',
    goals: ['- Clip-path', '- efeitos 3D', '- CSS Generativo'],
    day: '15/05/2020',
    hour: '10:10 até 12:10',
    description: `Se está começando seus estudos de #CSS, essa é uma ótima oportunidade de
    estudar e também criar a sua página pessoal e já ter algo para aprensentar na sua próxima entrevista
    de emprego. Serão 5 dias de conteúdo feitos pela Vanessa Tonini e a Juliana Amoasei e durante a live
    vou aprender com elas e fazer os execícios junto com vocês. Chega mais e bora criar um grupo de
    estudo`,
  });
  const { title, goals, day, hour, description, guest } = live;

  useEffect(() => {
    service
      .findLiveByUuid('ba7db862-9d11-4d8c-88f3-a784be150406')
      .then(({ data }) => {
        const dataLive = {
          title: data.title,
          goals: data.goals.map((goal) => `- ${goal}`),
          day: formatDate(data.startDate),
          hour: `${getHour(data.startDate)} - ${getHour(data.finishDate)}`,
          description: data.description,
        };

        setLive(dataLive);
      })
      .catch(() => {});
  }, []);

  return (
    <Template>
      <TitleNes>{title}</TitleNes>

      <InfosLive goals={goals} day={day} hour={hour} description={description} guest={guest} />
    </Template>
  );
};

export default LiveDetails;
