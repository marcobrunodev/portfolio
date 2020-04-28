import styled from 'styled-components';
import ContainerNes from '../../components/ContainerNes';
import TagNes from '../../components/TagNes';
import TitleNes from '../../components/TitleNes';
import ButtonNes from '../../components/ButtonNes';

const Title = styled.figcaption`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  padding: var(--gap-smaller) var(--gap-small);
  line-height: 1.2;
  text-align: center;
  background-color: var(--color-gray-lighter);
  color: var(--color-gray-dark);
`;

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Figure = styled.figure`
  height: 65%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Menu = styled.div`
  margin-top: auto;
  width: 100%;
`;

const Card = styled(ContainerNes)`
  display: flex;
  box-sizing: border-box;
  background-color: var(--color-gray-dark);
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 60vh;
  width: 20vw;
  width: calc(320px - var(--gap-smaller) * 2);
  height: 440px;

  ${TagNes} {
    position: absolute;
    top: 0;
    z-index: 2;
    transform: translateY(-30%);
  }

  ${TitleNes} {
    font-size: var(--size-big);
    padding-top: var(--gap-big);
  }

  ${ButtonNes}:not(:last-child) {
    margin-bottom: var(--gap-small);
  }
`;

export { Card, Figure, Photo, Title, Menu };
