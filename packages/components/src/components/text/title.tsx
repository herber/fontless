import styled from 'styled-components';

export let Title = styled.h1<{ smallMobile?: boolean }>`
  font-weight: 700;
  font-size: 3.2em;
  margin: 0px;

  @media screen and (max-width: 720px) {
    font-size: 1.85em;
  }

  ${p =>
    p.smallMobile
      ? `
    @media screen and (max-width: 720px) {
      font-size: 1.3em;
    }
  `
      : ''}
`;
