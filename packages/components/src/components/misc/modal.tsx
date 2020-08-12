import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { X } from 'react-feather';
import OutsideClickHandler from 'react-outside-click-handler';
import { Button } from '../input/button';
import { SimpleButton } from '../input/simpleButton';
import { Spacer } from './spacer';

let Global = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

let Inner = styled.div<{ open?: boolean }>`
  padding: 30px;
  background: white;
  width: 550px;
  max-width: 95%;
  margin: auto;
  margin-top: -20px;
  transition: all 0.3s;
  font-size: 15px;
  border-radius: 7px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding: 30px;
    width: 100%;
    max-width: 100%;
    margin: auto;
    border-radius: 0px;
    height: 100%;
  }

  ${p =>
    p.open
      ? `
    margin-top: 0px;
    `
      : ''}
`;

let Headline = styled.div`
  display: flex;
  margin-bottom: 15px;

  h1 {
    margin: 0px;
    font-size: 20px;
    flex-grow: 1;
    flex-shrink: 1;
    line-height: 30px;
    height: 30px;
  }
`;

let Content = styled.div`
  min-height: 60px;
  overflow: auto;

  @media screen and (max-width: 500px) {
    .m-content {
      flex-grow: 1;
    }
  }
`;

let Buttons = styled.div`
  display: flex;
  margin-top: 10px;

  button {
    margin-left: 10px;

    &:first-of-type {
      margin-left: 0px;
    }
  }
`;

let Wrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  z-index: 50;
  transition: all 0.3s;
  cursor: default;

  & > div {
    width: 550px;
    max-width: 95%;
    margin: auto;
  }

  ${p =>
    p.open
      ? `
    opacity: 1;
    pointer-events: all;
    `
      : ''}

  @media screen and (max-width: 500px) {
    & > div {
      width: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
`;

interface Props {
  open: boolean;
  children: React.ReactElement | React.ReactElement[];
  buttons: Parameters<typeof Button>[0];
  title?: string;
  onClose: () => void;
}

let RenderToBody = ({ children }: { children: React.ReactElement }) => {
  if (typeof window == 'undefined') return null;

  return ReactDOM.createPortal(children, document.body);
};

export let Modal = ({ open, children, buttons, title, onClose }: Props) => {
  useEffect(() => {
    let handler = (e: KeyboardEvent) => {
      if (e.key == 'Escape') onClose();
    };

    document.addEventListener('keyup', handler);

    return () => {
      document.removeEventListener('keyup', handler);
    };
  }, []);

  return (
    <RenderToBody>
      <Wrapper
        open={open}
        onClick={e => e.stopPropagation()}
        onMouseDown={e => e.stopPropagation()}
      >
        <OutsideClickHandler onOutsideClick={() => onClose()}>
          <Inner open={open}>
            {title && (
              <Headline>
                <h1>{title}</h1>
                <SimpleButton onClick={() => onClose()}>
                  <div className="icon">
                    <X />
                  </div>
                </SimpleButton>
              </Headline>
            )}

            <Content>{children}</Content>
            <Buttons>
              <Spacer />
              {buttons.map((b: any, i: number) => (
                <Button {...b} key={i} />
              ))}
            </Buttons>
          </Inner>
        </OutsideClickHandler>

        {open && <Global />}
      </Wrapper>
    </RenderToBody>
  );
};
