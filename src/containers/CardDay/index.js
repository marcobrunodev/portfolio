import React from 'react';
import PropTypes from 'prop-types';
import { Card, Title, Description, Menu } from './styles';
import TagNes from '../../components/TagNes';
import ButtonNes from '../../components/ButtonNes';

const CardDay = ({ uuid, startDate, shortTitle, shortDescription, shimmerEffect }) => (
  <Card as="article" shimmerEffect={shimmerEffect}>
    <TagNes>{startDate}</TagNes>
    <Title>{shortTitle}</Title>
    <Description>{shortDescription}</Description>

    <Menu>
      <ButtonNes share as="a">
        Compartilhar
      </ButtonNes>
      <ButtonNes to={`/lives/${uuid}`}>Detalhes</ButtonNes>
    </Menu>
  </Card>
);

CardDay.defaultProps = {
  shimmerEffect: false,
};

CardDay.propTypes = {
  uiid: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shimmerEffect: PropTypes.bool,
};

export default CardDay;
