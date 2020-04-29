import React from 'react';
import HeaderDev from '../../containers/HeaderDev';
import FooterDev from '../../containers/FooterDev';

const Template = ({ children }) => (
  <>
    <HeaderDev />
    {children}
    <FooterDev />
  </>
);

export default Template;
