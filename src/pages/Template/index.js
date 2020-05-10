import React from 'react';
import PropTypes from 'prop-types';
import HeaderDev from '../../containers/HeaderDev';
import FooterDev from '../../containers/FooterDev';

const Template = ({ children }) => (
  <>
    <HeaderDev />
    {children}
    <FooterDev />
  </>
);

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
