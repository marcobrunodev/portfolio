import React, { useState, useEffect } from 'react';
import { utcToZonedTime, format } from 'date-fns-tz';
import Template from '../Template';
import ContainerDev from '../../containers/ContainerDev';
import TitleNes from '../../components/TitleNes';
import CardDay from '../../containers/CardDay';
import WrapperCard from '../../containers/WrapperCard';
import PlusButton from '../../components/PlusButton';
import service from '../../services/lives.service';

const LivesSchedule = () => {
  const [lives, setLives] = useState([
    {
      uiid: 'a0',
      startDate: '',
      shortTitle: 'loading...',
      shortDescription: 'loading também...',
    },
    {
      uiid: 'a1',
      startDate: '',
      shortTitle: 'loading...',
      shortDescription: 'loading também...',
    },
    {
      uiid: 'a2',
      startDate: '',
      shortTitle: 'loading...',
      shortDescription: 'loading também...',
    },
  ]);
  const [shimmerEffect, setShimmerEffect] = useState(true);
  const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();

  const formatDate = (date) => {
    const dateStartLocal = utcToZonedTime(new Date(date), timeZone);
    const formtDateStartLocal = format(dateStartLocal, 'dd/MM/yyyy');

    return formtDateStartLocal;
  };

  useEffect(() => {
    service
      .findAllToSchedule()
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
