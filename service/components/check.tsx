import styled from 'styled-components';
import { Check as CheckIcon } from 'react-feather';

let Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

let Inner = styled.div<{ checked: boolean }>`
  border-radius: 5px;
  border: solid var(--accent-1) 1px;
  height: 24px;
  width: 24px;
  transition: all 0.3s;
  color: var(--accent-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: default;

  & > div {
    width: fit-content;
    margin: 2px auto 0px auto;
  }

  svg {
    width: 14px;
    height: 14px;
    margin-top: 1px;
    margin: auto;
    display: block;
    transition: all 0.3s;
    color: var(--primary);

    &.checked {
      transform: scale(1);
    }

    &.unchecked {
      transform: scale(0.7);
      opacity: 0;
    }
  }

  &:hover {
    background: var(--accent-0);
  }

  ${p =>
    p.checked
      ? `
    border: solid var(--primary) 1px;
    color: var(--primary);
  `
      : `
    &:hover {
      border: solid var(--accent-2) 1px;
    }
  `}
`;

export let Check = ({ checked, onClick }: { checked: boolean; onClick?: () => void }) => {
  return (
    <Wrapper role="checkbox">
      <Inner onClick={onClick} checked={checked}>
        <CheckIcon className={checked ? 'checked' : 'unchecked'} />
      </Inner>
    </Wrapper>
  );
};
