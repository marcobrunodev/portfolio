import styled from 'styled-components';
import logo from '../../img/MarcoBrunoDev.png';

const Wrapper = styled.figure`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Logo = styled.img.attrs({ src: logo })`
  height: 100%;
  margin-right: var(--gap-small);
`;
const Title = styled.figcaption``;

export { Wrapper, Logo, Title };
