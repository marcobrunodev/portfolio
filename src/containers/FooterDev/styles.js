import styled from 'styled-components';
import ContainerNes from '../../components/ContainerNes';
import { Action } from '../../components/SocialMedia/styles';

const Navigation = styled.nav`
  display: flex;
  justify-content: center;

  & > ${Action} {
    margin: 0 var(--gap-small) var(--gap-medium);
    width: 60px;
  }
`;

const Footer = styled(ContainerNes)`
  margin-top: var(--gap-bigger);
  padding: var(--gap-medium) 0;
  text-align: center;
`;

export { Footer, Navigation };
