import * as React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div`
  width: fit-content;
  display: flex;

  .dot {
    border-radius: 50%;
    width: 7px;
    height: 7px;
    background: var(--accent-2);
    transition: all 0.3s;

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;

export let Progress = ({ max, current }: { max: number; current: number }) => {
  return (
    <Wrapper>
      {new Array(max).fill(1).map((_, i) => (
        <div
          className="dot"
          style={{
            background: i + 1 == current ? 'var(--foreground)' : undefined
          }}
          key={i}
        ></div>
      ))}
    </Wrapper>
  );
};
