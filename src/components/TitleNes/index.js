import styled from 'styled-components';

const TitleNes = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-title);
  font-size: var(--size-big);
  line-height: 1.4;
  text-align: center;
  padding: var(--gap-big) var(--gap-small) 0;
  margin-bottom: var(--gap-bigger);

  @media (min-width: 700px) {
    font-size: var(--size-bigger);
    padding-top: var(--gap-bigger);
  }
`;

export default TitleNes;
