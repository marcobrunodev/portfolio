import React from 'react';
import PropTypes from 'prop-types';
import TagNes from '../../components/TagNes';
import { Guest, Photo, Name } from './styles';

const CardGuest = (props) => {
  const { name, photo } = props;

  return (
    <Guest as="article">
      <TagNes>Convidado</TagNes>

      <Photo src={photo} alt={`Foto ${name}`} />
      <Name>{name}</Name>
    </Guest>
  );
};

CardGuest.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default CardGuest;
