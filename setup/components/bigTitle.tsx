import styled from 'styled-components';

export let BigTitle = styled.h1<{ smallMobile?: boolean }>`
  font-weight: 700;
  font-size: 4.6em;
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
