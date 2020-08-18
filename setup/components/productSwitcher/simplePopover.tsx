import styled from 'styled-components';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

let Wrapper = styled.div`
  position: relative;
`;

let PopoverWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 40px;
  right: 0px;
  border: solid #efefef 1px;
  background-color: white;
  color: #888;
  box-shadow: 0 4px 14px -2px #dddddd;
  border-radius: 10px;
  max-width: 500px !important;
  outline: none;
  z-index: 20000;
  transition: all 0.3s;
  opacity: 0;
  pointer-events: none;

  @media screen and (max-width: 500px) {
    position: fixed;
    border-radius: 0px;
    top: 40px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    width: 100vw !important;
    border: solid transparent 1px;
  }

  ${p =>
    p.visible &&
    `
    top: 30px;
    opacity: 1;
    pointer-events: all;
  `}
`;

export interface PopoverRendererData {
  visible: boolean;
  setVisible: (v: boolean) => void;
}

export let SimplePopover = ({
  children,
  popover,
  width
}: {
  children: React.ReactElement;
  popover: (data: PopoverRendererData) => React.ReactElement;
  width: number;
}) => {
  let [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <Wrapper>
        <div onClick={() => setVisible(!visible)}>{children}</div>
        <PopoverWrapper visible={visible} style={{ width }}>
          {popover({ visible, setVisible })}
        </PopoverWrapper>
      </Wrapper>
    </OutsideClickHandler>
  );
};
