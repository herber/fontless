import styled from 'styled-components';

export let Grid = styled.div<{ gap?: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: calc(50% - ${p => (p && p.gap ? p.gap / 2 : 15)}px) calc(
      50% - ${p => (p && p.gap ? p.gap / 2 : 15)}px
    );
  grid-column-gap: ${p => p.gap || 30}px;
  grid-row-gap: ${p => p.gap || 30}px;

  @media screen and (max-width: 720px) {
    grid-template-columns: 100%;
    grid-column-gap: 0px;
    grid-row-gap: ${p => p.gap || 30}px;
  }
`;
