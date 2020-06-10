import styled from 'styled-components';
import PhotoLive from '../../components/PhotoLive';
import { Card } from '../CardInfo/styles';
import CardDescription from '../CardDescription';
import ButtonNes from '../../components/ButtonNes';
import { Guest } from '../CardGuest/styles';

const Wrapper = styled.article`
  ${PhotoLive} {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > ${CardDescription} {
    max-width: 1200px;
    margin-bottom: var(--gap-medium);
  }

  & > ${ButtonNes} {
    max-width: 320px;
    margin-bottom: var(--gap-small);
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${Card} {
    margin-bottom: var(--gap-medium);
    text-align: center;
    line-height: 1.4;
  }

  & > ${Guest} {
    order: -1;
  }

  @media (min-width: 660px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    & > ${Card}:not(:last-of-type) {
      margin-right: var(--gap-medium);
    }

    & > ${Guest} {
      margin-right: var(--gap-medium);
    }
  }

  @media (min-width: 1000px) {
    & > ${Guest} {
      order: 0;
    }
  }
`;

export { Wrapper, Infos, Navigation };
