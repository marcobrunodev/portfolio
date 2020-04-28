import styled from 'styled-components';
import { Card } from '../CardInfo/styles';

const Photo = styled.img``;
const Name = styled.p``;
const Guest = styled(Card)`
  position: relative;

  & > ${Name} {
    position: absolute;
    bottom: 0;
    padding: var(--gap-smaller) var(--gap-small);
    background-color: var(--color-primary-medium);
  }
`;

export { Guest, Photo, Name };
