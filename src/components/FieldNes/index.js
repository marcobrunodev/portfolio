import React from 'react';
import PropTypes from 'prop-types';
import { Label, Content, Input } from './styles';
import MsgError from '../MsgError';

const FieldNes = ({ content, type, name, placeholder, onChange, onBlur, msgError }) => (
  <Label>
    <Content>{content}</Content>
    <Input type={type} name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
    <MsgError>{msgError}</MsgError>
  </Label>
);

FieldNes.defaultProps = {
  type: 'text',
  placeholder: '',
  msgError: '',
};

FieldNes.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  msgError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FieldNes;
