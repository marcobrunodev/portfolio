import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TitleNes from '../../components/TitleNes';
import InfosLive from '../../containers/InfosLive';
import Template from '../Template';
import service from '../../services/lives.service';
import { formatDate, getHour } from '../../libs/date';
import ShareSocial from '../../containers/ShareSocial';
import ButtonShare from '../../components/ButtonShare';

const LiveDetails = () => {
  const [live, setLive] = useState({
    title: 'Carregando título feliz...',
    goals: ['- ainda não sei', '- o que', '- vai acontecer'],
    day: '00/00/0001',
    hour: 'AA:BB até CC:KK',
    description: `Lorem da galera...`,
  });
  const [shimmerEffect, setShimmerEffect] = useState(true);
  const [activeShareModal, setActiveShareModal] = useState(false);
  const { title, goals, day, hour, description, guest } = live;
  const { id } = useParams();

  useEffect(() => {
    service
      .findLiveByUuid(id)
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
  }, [id]);

  const changeActiveShareModal = () => {
    setActiveShareModal(!activeShareModal);
  };

  const getUrl = () => {
    const { href } = window.location;
    const isLocalhost = /^http:\/\/localhost/;

    return isLocalhost.test(href) ? 'https://twitch.tv/marcobrunodev' : href;
  };

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
        changeActiveShareModal={changeActiveShareModal}
      />

      <ShareSocial
        title={title}
        url={getUrl()}
        active={activeShareModal}
        changeActive={changeActiveShareModal}
      />

      <ButtonShare
        config={{
          params: {
            title: 'My share',
            text: 'Check out this amazing react-share-api library',
            url: 'https://github.com/marcolanaro/react-web-share-api',
          },
          /* tslint:disable-next-line:no-console */
          onShareSuccess: () => console.log('Success'),
          /* tslint:disable-next-line:no-console */
          onShareError: (error: Error) => console.log('error', error),
        }}
      />
    </Template>
  );
};

export default LiveDetails;
