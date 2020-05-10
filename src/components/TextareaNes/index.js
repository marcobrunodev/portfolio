import React from 'react';
import PropTypes from 'prop-types';
import { Label, Content } from '../FieldNes/styles';
import Textarea from './styles';

const TextareaNes = ({ content, placeholder }) => (
  <Label>
    <Content>{content}</Content>
    <Textarea placeholder={placeholder} />
  </Label>
);

TextareaNes.propTypes = {
  placeholder: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TextareaNes;
