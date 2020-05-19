import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './styles';

const FormNes = ({ children, onSubmit }) => (
  <Form as="form" onSubmit={onSubmit}>
    {children}
  </Form>
);

// oneOf([element, arrayOf(element))

FormNes.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormNes;
