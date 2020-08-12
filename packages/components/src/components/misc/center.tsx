import styled from 'styled-components';

export let Center = styled.div<{ width?: string }>`
  max-width: ${p => p.width || '720px'};
  margin: 0px auto;
`;
