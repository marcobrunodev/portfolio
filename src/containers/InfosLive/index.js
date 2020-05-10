import React from 'react';
import PropTypes from 'prop-types';
import CardDescription from '../CardDescription';
import CardInfo from '../CardInfo';
import PhotoLive from '../../components/PhotoLive';
import { Wrapper, Infos, Navigation } from './styles';
import CardGuest from '../CardGuest';
import ButtonNes from '../../components/ButtonNes';

const InfosLive = (props) => {
  const { photo, altPhoto, goals, description, day, hour, guest } = props;

  return (
    <Wrapper>
      <PhotoLive src={photo} alt={altPhoto} />

      <Infos>
        <CardInfo label="Horário" items={[day, hour]} />
        {guest && <CardGuest name={guest.name} photo={guest.photo} />}
        <CardInfo label="Objetivo" items={goals} />

        <Navigation>
          <CardDescription>
            <p>{description}</p>
          </CardDescription>

          <ButtonNes share>Compartilhar</ButtonNes>
          <ButtonNes href="https://twitch.tv/marcobrunodev">Assistir!</ButtonNes>
        </Navigation>
      </Infos>
    </Wrapper>
  );
};

InfosLive.propTypes = {
  photo: PropTypes.string.isRequired,
  altPhoto: PropTypes.string.isRequired,
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  guest: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
  }),
};

InfosLive.defaultProps = {
  guest: false,
};

export default InfosLive;