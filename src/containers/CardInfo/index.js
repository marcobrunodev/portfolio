import React from 'react';
import PropTypes from 'prop-types';
import { Card, Item } from './styles';
import TagNes from '../../components/TagNes';

const CardInfo = ({ label, items = [], shimmerEffect }) => (
  <Card as="dl" shimmerEffect={shimmerEffect}>
    <TagNes as="dt">{label}</TagNes>
    {items.map((item) => (
      <Item>{item}</Item>
    ))}
  </Card>
);

CardInfo.defaultProps = {
  items: [],
  shimmerEffect: false,
};

CardInfo.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(String),
  shimmerEffect: PropTypes.bool,
};

export default CardInfo;
