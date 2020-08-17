import styled from 'styled-components';

export let Highlight = styled.span<{ startColor: string; endColor: string }>`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, ${p => p.startColor}, ${p => p.endColor});
`;
