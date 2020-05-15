import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContainerNes from '../../components/ContainerNes';
import { Title } from '../../components/LogoDev/styles';

const Logo = styled(Link)`
  height: 100%;
  text-decoration: none;
`;

const Header = styled(ContainerNes)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--size-header);

  & ${Title} {
    display: none;

    @media (min-width: 450px) {
      display: block;
    }
  }
`;

export { Header, Logo };
