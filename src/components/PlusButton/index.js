import React from 'react';
import { Plus, Action } from './styles';

const PlusButton = () => (
  <Action to="/lives/new">
    <Plus />
  </Action>
);

export default PlusButton;
