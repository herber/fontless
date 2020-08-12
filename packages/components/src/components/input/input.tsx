import React from 'react';
import styled from 'styled-components';

let Wrapper = styled.div`
  width: 100%;
`;

let Label = styled.p`
  color: #888;
  font-size: 13px;
  margin: 0px 0px 5px 0px;
  text-align: left;
  user-select: none;
`;

let InputWrapper = styled.div`
  border: solid #efefef 1px;
  transition: all 0.3s;
  border-radius: 7px;
  display: flex;

  & > input {
    padding: 9px 15px;
    outline: none;
    border: none;
    background: var(--background);
    font-size: 14px;
    flex-grow: 1;
    border-radius: 6px;
  }

  &:hover:not(.noHover),
  &:focus-within:not(.noHover) {
    border: solid black 1px;
  }
`;

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export let Input = React.forwardRef((props: Props, ref: any) => {
  return (
    <Wrapper className="input">
      {props.label && <Label>{props.label}</Label>}
      <InputWrapper>
        <input
          ref={ref}
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          name={props.name}
          autoFocus={props.autoFocus}
        ></input>
      </InputWrapper>
    </Wrapper>
  );
});
