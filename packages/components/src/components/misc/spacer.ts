import styled from 'styled-components';

export let Spacer = styled.div<{ height?: number; width?: number }>`
  ${p => (p.height ? `height: ${p.height}px;` : '')}
  ${p => (p.width ? `width: ${p.width}px;` : '')}
  ${p => (!p.width && !p.height ? 'flex-grow: 1;' : '')}
`;
