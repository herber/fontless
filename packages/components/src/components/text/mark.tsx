import styled from 'styled-components';

export let Mark = styled.mark<{ color?: string }>`
  background: unset;
  color: ${p => p.color || 'var(--accent-4)'};
`;
