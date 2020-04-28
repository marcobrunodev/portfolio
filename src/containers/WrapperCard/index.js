import styled from 'styled-components';
import { Card } from '../CardDay/styles';

const WrapperCard = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  & > ${Card} {
    margin-right: var(--gap-small);
    margin-left: var(--gap-small);
    margin-bottom: var(--gap-bigger);
  }
`;

export default WrapperCard;
