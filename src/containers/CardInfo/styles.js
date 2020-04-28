import styled from 'styled-components';
import ContainerNes from '../../components/ContainerNes';
import TagNes from '../../components/TagNes';

const Card = styled(ContainerNes)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 320px;
  height: 320px;

  & > ${TagNes} {
    position: absolute;
    top: 0;
    transform: translateY(-30%);
    order: 0;
    z-index: 5;
  }
`;

const Item = styled.dd`
  &:not(:last-child) {
    margin-bottom: var(--gap-medium);
  }
`;

export { Card, Item };
