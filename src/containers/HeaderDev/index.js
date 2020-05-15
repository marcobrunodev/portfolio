import React from 'react';
import LogoDev from '../../components/LogoDev';
import { Header, Logo } from './styles';
import MenuDev from '../MenuDev';

const HeaderDev = () => (
  <Header as="header">
    <Logo to="/">
      <LogoDev />
    </Logo>

    <MenuDev />
  </Header>
);

export default HeaderDev;
