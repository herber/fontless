import styled from 'styled-components';

let Wrapper = styled.div`
  height: 30px;
  display: flex;
  width: fit-content;

  svg {
    height: 100%;
  }

  &.big {
    height: 80px;
    margin: 0px auto;
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
      <svg viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="black" />
        <circle cx="180" cy="50" r="50" fill="black" />
        <rect x="130" y="130" width="100" height="100" fill="black" />
        <circle cx="50" cy="180" r="50" fill="black" />
      </svg>

      {!noText && <Title>Varld Fontless</Title>}
    </Wrapper>
  );
};
