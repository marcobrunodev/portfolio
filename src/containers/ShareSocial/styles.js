import styled, { css } from 'styled-components';
import ModalNes from '../../components/ModalNes';
import TitleNes from '../../components/TitleNes';
import ContainerNes from '../../components/ContainerNes';
import { Icon } from '../../components/SocialMedia/styles';

const Share = styled(ModalNes)`
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > ${ContainerNes} {
    box-sizing: border-box;
    width: calc(100% - var(--gap-small) * 2);
    min-height: 360px;
    max-width: 600px;
  }

  & ${TitleNes} {
    font-size: var(--size-big);
  }

  & ${Icon} {
    width: 60px;
    margin-left: var(--gap-small);
    margin-right: var(--gap-small);
  }

  ${({ active }) =>
    active &&
    css`
      display: flex;
    `}
`;

export default Share;
