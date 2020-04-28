import styled from 'styled-components';
import _containers from '../../styles/tools/_containers';
import TextNes from '../../components/TextNes';

const ContainerDev = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: var(--gap-bigger);
  ${_containers};

  ${TextNes} {
    text-align: center;
    max-width: 1100px;
    margin: 0 auto var(--gap-bigger);
  }
`;

export default ContainerDev;
