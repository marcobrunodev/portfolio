import React from 'react';
import PropTypes from 'prop-types';
import { Label, Content, Input } from './styles';
import MsgError from '../MsgError';

const FieldNes = ({ content, type, name, placeholder, onChange, msgError }) => (
  <Label>
    <Content>{content}</Content>
    <Input type={type} name={name} placeholder={placeholder} onChange={onChange} />
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
  msgError: PropTypes.string,
};

export default FieldNes;
