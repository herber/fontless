import * as React from 'react';
import styled, { keyframes } from 'styled-components';

let Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

let spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

let Spinner = styled.div<{ size?: 'small' }>`
  border: ${p => (p.size == 'small' ? '2px' : '4px')} solid #f3f3f3;
  border-top: ${p => (p.size == 'small' ? '2px' : '4px')} solid black;
  border-radius: 50%;
  width: ${p => (p.size == 'small' ? '15px' : '30px')};
  height: ${p => (p.size == 'small' ? '15px' : '30px')};
  animation: ${spin} 2s linear infinite;
`;

export let Loading = ({ size }: { size?: 'small' }) => {
  return (
    <Wrapper className="loading">
      <Spinner size={size} />
    </Wrapper>
  );
};
