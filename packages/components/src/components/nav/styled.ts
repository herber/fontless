import styled from 'styled-components';
import { SimpleButton } from '../input/simpleButton';

export let NavWrapper = styled.div<{ scrolled: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.6);
  top: 0px;
  right: 0px;
  left: 0px;
  backdrop-filter: blur(10px);
  z-index: 10;
  border-bottom: solid transparent 1px;
  user-select: none;
  transition: all 0.3s;

  @media screen and (max-width: 870px) {
    background: white;
  }

  ${p =>
    p.scrolled
      ? `
  border-bottom: solid #efefef 1px;
  `
      : ''}
`;

export let NavInner = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-grow: 1;
`;

export let NavSide = styled.div`
  display: flex;
`;

export let NavLeft = styled(NavSide)`
  flex-grow: 1;
`;

export let NavRight = styled(NavSide)`
  .inner {
    display: flex;
  }

  @media screen and (max-width: 870px) {
    .desktop {
      display: none;
    }
  }

  @media screen and (min-width: 870px) {
    .mobile {
      display: none;
    }
  }

  button {
    margin-left: 5px;
  }
`;

export let MobileMenu = styled.div<{ open: boolean }>`
  padding: 0px 20px;
  overflow: hidden;
  max-height: 0px;
  transition: all 0.3s;
  border-bottom: solid transparent 1px;

  button {
    margin-bottom: 5px;
  }

  ${p =>
    p.open
      ? `
  padding: 0px 20px 15px 20px;
  max-height: 100vh;
  border-bottom: solid #efefef 1px;
  overflow: auto;
  `
      : ''}
`;

export let LogoButton = styled(SimpleButton)`
  padding: 0px 10px 0px 0px;
`;
