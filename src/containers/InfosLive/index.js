import React from 'react';
import PropTypes from 'prop-types';
import CardDescription from '../CardDescription';
import CardInfo from '../CardInfo';
import { Wrapper, Infos, Navigation } from './styles';
import CardGuest from '../CardGuest';
import ButtonNes from '../../components/ButtonNes';

const InfosLive = (props) => {
  const { goals, description, day, hour, guest, shimmerEffect } = props;

  return (
    <Wrapper>
      <Infos shimmerEffect={shimmerEffect}>
        <CardInfo label="Horário" items={[day, hour]} shimmerEffect={shimmerEffect} />
        {guest && <CardGuest name={guest.name} photo={guest.photo} />}
        <CardInfo label="Objetivo" items={goals} shimmerEffect={shimmerEffect} />

        <Navigation>
          <CardDescription shimmerEffect={shimmerEffect}>
            <p>{description}</p>
          </CardDescription>

          <ButtonNes share>Compartilhar</ButtonNes>
          <ButtonNes target="_blank" as="a" href="https://twitch.tv/marcobrunodev">
            Assistir!
          </ButtonNes>
        </Navigation>
      </Infos>
    </Wrapper>
  );
};

InfosLive.propTypes = {
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
