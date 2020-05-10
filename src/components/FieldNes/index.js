import React from 'react';
import PropTypes from 'prop-types';
import { Label, Content, Input } from './styles';
import MsgError from '../MsgError';

const FieldNes = ({ content, type, name, placeholder, onChange }) => (
  <Label>
    <Content>{content}</Content>
    <Input type={type} name={name} placeholder={placeholder} onChange={onChange} />
    <MsgError>Error</MsgError>
  </Label>
);

FieldNes.defaultProps = {
  type: 'text',
  placeholder: '',
};

FieldNes.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FieldNes;
