import styled from 'styled-components';
import { ChevronDown } from 'react-feather';
import { Spacer } from '@varld/fontless-components';
import { productPopover } from './popover';
import { SimplePopover } from './simplePopover';

let Wrapper = styled.div`
  height: 40px;
  padding: 7px 30px;
  border-bottom: solid black 1px;
  background: #222;
  color: #ddd;

  a {
    color: unset;
  }
`;

let Inner = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  height: 26px;
  display: flex;
`;

let MadeBy = styled.div`
  height: 26px;
  line-height: 26px;
  overflow: hidden;
  margin-left: 12px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 500;

  @media screen and (max-width: 350px) {
    display: none;
  }
`;

let LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  svg {
    height: 26px;
    width: 26px;
  }

  &:hover {
    background: #3a3a3a;
  }
`;

let MoreFrom = styled.div`
  height: 26px;
  line-height: 26px;
  overflow: hidden;
  margin-left: 12px;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  padding: 0px 8px;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;

  svg {
    height: 12px;
    width: 12px;
    color: #ddd;
    margin-top: 7px;
    margin-left: 7px;
  }

  &:hover {
    background: #3a3a3a;
  }
`;

export let ProductSwitcher = () => {
  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Wrapper onClick={scrollToTop}>
      <Inner>
        <a href="https://varld.co" target="_blank" rel="noopener noreferrer">
          <LogoWrapper>
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="400" rx="50" fill="white" />
              <rect x="80" y="80" width="100" height="100" fill="black" />
              <circle cx="270" cy="130" r="50" fill="black" />
              <rect x="220" y="220" width="100" height="100" fill="black" />
              <circle cx="130" cy="270" r="50" fill="black" />
            </svg>
            <MadeBy>Made by Varld</MadeBy>
          </LogoWrapper>
        </a>
        <Spacer />

        <SimplePopover popover={productPopover} width={350}>
          <MoreFrom>
            More from Varld <ChevronDown />
          </MoreFrom>
        </SimplePopover>
      </Inner>
    </Wrapper>
  );
};
