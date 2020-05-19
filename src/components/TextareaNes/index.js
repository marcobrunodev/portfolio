import React from 'react';
import PropTypes from 'prop-types';
import { Label, Content } from '../FieldNes/styles';
import Textarea from './styles';
import MsgError from '../MsgError';

const TextareaNes = ({ name, content, placeholder, msgError, value, onChange, onBlur }) => (
  <Label>
    <Content>{content}</Content>
    <Textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={value}
    />
    <MsgError>{msgError}</MsgError>
  </Label>
);

TextareaNes.defaultProps = {
  msgError: '',
  placeholder: '',
};

TextareaNes.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  content: PropTypes.string.isRequired,
  msgError: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextareaNes;
