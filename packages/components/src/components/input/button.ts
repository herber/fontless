import styled from 'styled-components';

type displayTypes = 'default' | 'primary' | 'secondary' | 'waning' | 'danger';

let getBorderColor = (display?: displayTypes) => {
  if (display == 'primary') return 'var(--primary)';
  if (display == 'secondary') return 'var(--accent-1)';
  if (display == 'waning') return 'var(--warning)';
  if (display == 'danger') return 'var(--danger)';

  return 'black';
};

let getBackgroundColor = (display?: displayTypes) => {
  if (display == 'primary') return 'var(--primary)';
  if (display == 'secondary') return 'var(--background)';
  if (display == 'waning') return 'var(--warning)';
  if (display == 'danger') return 'var(--danger)';

  return 'black';
};

let getTextColor = (display?: displayTypes) => {
  if (display == 'primary') return 'var(--primary-text)';
  if (display == 'secondary') return 'var(--foreground)';
  if (display == 'waning') return 'var(--warning-text)';
  if (display == 'danger') return 'var(--danger-text)';

  return 'white';
};

export let Button = styled.button<{ display?: displayTypes }>`
  outline: none;
  border-radius: 5px;
  height: 36px;
  line-height: 34px;
  padding: 0px 6px;
  transition: all 0.3s;
  font-size: 16px;
  font-weight: 500;
  border: solid ${p => getBorderColor(p.display)} 1px;
  background: ${p => getBackgroundColor(p.display)};
  color: ${p => getTextColor(p.display)};
  padding: 0px 20px;
  display: flex;
  width: fit-content;
  cursor: pointer;
  justify-content: center;

  &:hover,
  &:focus {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  }

  svg {
    height: 18px;
    width: 18px;
    margin-top: 8px;
    margin-left: 8px;
  }
`;
