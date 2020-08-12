import styled from 'styled-components';

export let SimpleButton = styled.button<{ display?: 'highlight' | 'bordered' | 'delete' }>`
  background: none;
  outline: none;
  border-radius: 5px;
  height: 30px;
  min-width: 30px;
  line-height: 30px;
  padding: 0px 8px;
  transition: all 0.3s;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  display: flex;
  width: fit-content;
  cursor: pointer;
  border: none;

  svg {
    height: 16px;
    width: 16px;
    margin-top: 7px;
  }

  .icon {
    height: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    svg {
      margin-top: 0px;
    }
  }

  .badge {
    height: 30px;
  }

  &:hover,
  &:focus {
    background: rgba(200, 200, 200, 0.2);
  }

  ${p =>
    p.display == 'bordered'
      ? `
  border: solid var(--accent-1) 1px;
  background: var(--background);
  line-height: 28px;

  &:hover,
  &:focus {
    border: solid var(--accent-2) 1px;
    background: var(--background);
  }
  `
      : ''}

  ${p =>
    p.display == 'delete'
      ? `
  color: #eb3b5a;
  `
      : ''}

  ${p =>
    p.display == 'highlight'
      ? `
  background: var(--primary);
  color: var(--primary-text);
  padding: 0px 12px;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
    background: var(--primary);
    color: var(--primary-text);
  }
  `
      : ''}
`;
