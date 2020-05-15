import React from 'react';
import PropTypes from 'prop-types';
import { Card, Figure, Title, Photo, Menu } from './styles';
import TagNes from '../../components/TagNes';
import ButtonNes from '../../components/ButtonNes';

const CardDay = ({ uiid, date, photo, title }) => (
  <Card as="article">
    <TagNes>{date}</TagNes>
    <Figure>
      <Photo src={photo} />
      <Title>{title}</Title>
    </Figure>

    <Menu>
      <ButtonNes share>Compartilhar</ButtonNes>
      <ButtonNes to={`/lives/${uiid}`}>Detalhes</ButtonNes>
    </Menu>
  </Card>
);

CardDay.propTypes = {
  uiid: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardDay;
