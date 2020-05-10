import styled from 'styled-components';
import { Link } from 'react-router-dom';
import plus from '../../img/icons/plus-icon.png';

const Plus = styled.img.attrs({ src: plus })``;
const Action = styled(Link)``;

export { Plus, Action };
