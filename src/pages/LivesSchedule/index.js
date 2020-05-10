import React from 'react';
import Template from '../Template';
import ContainerDev from '../../containers/ContainerDev';
import TitleNes from '../../components/TitleNes';
import TextNes from '../../components/TextNes';
import ActionNes from '../../components/ActionNes';
import CardDay from '../../containers/CardDay';
import WrapperCard from '../../containers/WrapperCard';
import cursoFrontEnd from '../../img/cursoFrontEnd.png';
import PlusButton from '../../components/PlusButton';

const lives = [
  {
    uiid: 1,
    title: 'Curso de FrontEnd #08',
    date: '28/04/2020',
    photo: cursoFrontEnd,
  },
  {
    uiid: 2,
    title: 'Curso de FrontEnd #09',
    date: '29/04/2020',
    photo: cursoFrontEnd,
  },
  {
    uiid: 3,
    title: 'Curso de FrontEnd #10',
    date: '30/04/2020',
    photo: cursoFrontEnd,
  },
  {
    uiid: 4,
    title: 'Curso de FrontEnd #11',
    date: '01/05/2020',
    photo: cursoFrontEnd,
  },
  {
    uiid: 5,
    title: 'Curso de FrontEnd #12',
    date: '02/05/2020',
    photo: cursoFrontEnd,
  },
];

const LivesSchedule = () => (
  <Template>
    <ContainerDev>
      <TitleNes>Agenda das Lives</TitleNes>
      <TextNes>
        De segunda a sábado às 19hrs começa as lives na
        <ActionNes href="https://twitch.tv/marcobrunodev">twitch.tv/marcobrunodev</ActionNes> com
        muito conteúdo free ao vivo e feliz, o foco da lives é sobre desenvolvimento de sites e
        aplicação.
      </TextNes>

      <WrapperCard>
        {lives.map(({ uiid, title, date, photo }) => (
          <CardDay uiid={uiid} title={title} date={date} photo={photo} />
        ))}
      </WrapperCard>

      <PlusButton />
    </ContainerDev>
  </Template>
);

export default LivesSchedule;
