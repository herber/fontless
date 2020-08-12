import * as React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div<{ link?: boolean }>`
  border: solid var(--accent-1) 1px;
  text-align: left;
  padding: 17px 20px 20px 20px;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: default;

  ${p =>
    p.link &&
    `
    &:hover {
      border: solid var(--primary) 1px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
    }
  `}
`;

let Title = styled.div<{ bigContents?: boolean }>`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 6px;

  ${p =>
    p.bigContents &&
    `
    font-size: 14px;
    `}
`;

let Contents = styled.div<{ bigContents?: boolean }>`
  font-size: 15px;
  color: var(--accent-5);

  ${p =>
    p.bigContents &&
    `
    font-size: 18px;
    `}
`;

export let Card = ({
  title,
  children,
  onClick,
  link,
  bigContents
}: {
  title: string;
  children: string | React.ReactElement | React.ReactElement[];
  onClick?: () => void;
  link?: boolean;
  bigContents?: boolean;
}) => {
  return (
    <Wrapper onClick={onClick} role="button" link={link}>
      <Title bigContents={bigContents}>{title}</Title>
      <Contents bigContents={bigContents}>{children}</Contents>
    </Wrapper>
  );
};
