import * as React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div`
  height: 30px;
  display: flex;
  width: fit-content;

  img {
    height: 30px;
    width: 30px;
  }

  &.big {
    height: 80px;
    margin: 0px auto;

    img {
      height: 80px;
      width: 80px;
    }
  }
`;

let Title = styled.div`
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: black;
`;

export let Logo = ({ noText, size }: { noText?: boolean; size?: 'big' }) => {
  return (
    <Wrapper className={size}>
      <img
        src="https://cdn.varld.co/logos/varld/transparent_with_margin.svg"
        alt="Varld's logo"
      />

      {!noText && <Title>Varld Fontless</Title>}
    </Wrapper>
  );
};
