import React, { useState, useEffect } from 'react';
import Template from '../Template';
import ContainerDev from '../../containers/ContainerDev';
import TitleNes from '../../components/TitleNes';
import CardDay from '../../containers/CardDay';
import WrapperCard from '../../containers/WrapperCard';
import PlusButton from '../../components/PlusButton';
import service from '../../services/lives.service';
import { formatDate } from '../../libs/date';

const LivesSchedule = () => {
  const [lives, setLives] = useState([
    {
      uuid: 'a0',
      startDate: '',
      shortTitle: 'loading...',
      shortDescription: 'loading também...',
    },
    {
      uuid: 'a1',
      startDate: '',
      shortTitle: 'loading...',
      shortDescription: 'loading também...',
    },
    {
      uuid: 'a2',
      startDate: '',
      shortTitle: 'loading...',
      shortDescription: 'loading também...',
    },
  ]);
  const [shimmerEffect, setShimmerEffect] = useState(true);

  useEffect(() => {
    service
      .findLivesFuture()
      .then(({ data }) => {
        const newLives = data.map((live) => ({ ...live, startDate: formatDate(live.startDate) }));

        setLives(newLives);
        setShimmerEffect(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Template>
      <ContainerDev>
        <TitleNes>Agenda das Lives</TitleNes>

        <WrapperCard>
          {lives.map(({ uuid, shortTitle, startDate, shortDescription }) => (
            <CardDay
              uuid={uuid}
              key={uuid}
              shortTitle={shortTitle}
              startDate={startDate}
              shortDescription={shortDescription}
              shimmerEffect={shimmerEffect}
            />
          ))}
        </WrapperCard>

        <PlusButton />
      </ContainerDev>
    </Template>
  );
};

export default LivesSchedule;
