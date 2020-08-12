import * as React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 7px;

  & > div {
    font-size: 9px;
    height: 15px;
    line-height: 13px;
    border: solid ${p => p.color || '#eb3b5a'} 1px;
    border-radius: 3px;
    padding: 0px 5px;
    font-weight: 500;
    color: ${p => p.color || '#eb3b5a'};
  }
`;

export let Badge = ({ children, color }: { children: string; color?: string }) => {
  return (
    <Wrapper color={color} className="badge">
      <div>{children}</div>
    </Wrapper>
  );
};
