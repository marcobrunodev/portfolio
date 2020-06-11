import React, { useEffect, useState } from 'react';
import TitleNes from '../../components/TitleNes';
import InfosLive from '../../containers/InfosLive';
import Template from '../Template';
import service from '../../services/lives.service';
import { formatDate, getHour } from '../../libs/date';

const LiveDetails = () => {
  const [live, setLive] = useState({
    title: 'Carregando título feliz...',
    goals: ['- ainda não sei', '- o que', '- vai acontecer'],
    day: '00/00/0001',
    hour: 'AA:BB até CC:KK',
    description: `Lorem da galera...`,
  });
  const [shimmerEffect, setShimmerEffect] = useState(true);
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
        setShimmerEffect(false);
      })
      .catch(() => {});
  }, []);

  return (
    <Template>
      <TitleNes shimmerEffect={shimmerEffect}>{title}</TitleNes>

      <InfosLive
        shimmerEffect={shimmerEffect}
        goals={goals}
        day={day}
        hour={hour}
        description={description}
        guest={guest}
      />
    </Template>
  );
};

export default LiveDetails;
