import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './styles';

const FormNes = ({ children, onSubmit }) => (
  <Form as="form" onSubmit={onSubmit}>
    {children}
  </Form>
);

FormNes.propTypes = {
  children: PropTypes.element.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormNes;
