import React from 'react';
import { Card, Item } from './styles';
import TagNes from '../../components/TagNes';

const CardInfo = ({ label, items = [] }) => (
  <Card as="dl">
    <TagNes as="dt">{label}</TagNes>
    {items.map((item) => (
      <Item>{item}</Item>
    ))}
  </Card>
);

export default CardInfo;
