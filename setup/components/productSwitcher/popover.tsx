import { useEffect } from 'react';
import styled from 'styled-components';
import { useScroll } from '@varld/fontless-hooks';
import { PopoverRendererData } from './simplePopover';
import { Spacer } from '@varld/fontless-components';

let LinkButton = styled.a`
  color: #888;
  font-size: 13px;
  padding: 3px 6px;
  border-radius: 5px;

  &:hover {
    background: #efefef;
    color: #444;
    transition: all 0.3s;
  }

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;

let Wrapper = styled.div`
  padding-top: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

let Product = styled.a`
  padding: 12px 14px;
  border-radius: 10px;
  display: flex;
  transition: all 0.3s;
  margin: 0px 15px;
  cursor: pointer;

  &:hover {
    background: #efefef;
  }
`;

let ProductImage = styled.div`
  display: flex;

  img {
    height: 40px;
    width: 40px;
    border-radius: 5px;
  }
`;

let ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;

  h2 {
    margin: 0px;
    font-size: 15px;
    font-weight: 500;
    color: black;
  }

  p {
    margin: 0px;
    font-size: 13px;
    color: #666;
  }
`;

let Bottom = styled.div`
  border-top: solid #efefef 1px;
  background: #fafafa;
  padding: 12px 20px 14px 20px;
  margin-top: 10px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  .bottom-inner {
    width: fit-content;
    margin: 0px auto;
    font-weight: 500;
  }
`;

export let productPopover = (data: PopoverRendererData) => {
  let { y } = useScroll();

  useEffect(() => {
    let to: number;

    if (data.visible && y > 0 && y < 40) {
      to = setTimeout(() => {
        if (window.scrollY != 0) {
          data.setVisible(false);
        }
      }, 150);
    } else if (data.visible && y > 0) {
      data.setVisible(false);
    }

    return () => clearTimeout(to);
  }, [data.visible, y]);

  return (
    <Wrapper>
      <Product href="https://varld.co">
        <ProductImage>
          <img src="https://cdn.varld.co/logos/varld/logo.svg" />
        </ProductImage>
        <ProductDescription>
          <div>
            <h2>Varld</h2>
            <p>Building powerful tools for humans.</p>
          </div>
        </ProductDescription>
      </Product>

      <hr />

      <Product href="https://varld.co/launchbase">
        <ProductImage>
          <img src="https://cdn.varld.co/logos/launchbase/logo.svg" />
        </ProductImage>
        <ProductDescription>
          <div>
            <h2>Launchbase</h2>
            <p>Collect and manage beta users.</p>
          </div>
        </ProductDescription>
      </Product>

      <Product href="https://varld.co/elements">
        <ProductImage>
          <img src="https://cdn.varld.co/logos/elements/logo.svg" />
        </ProductImage>
        <ProductDescription>
          <div>
            <h2>Elements</h2>
            <p>Collect links, files, note and more.</p>
          </div>
        </ProductDescription>
      </Product>

      <Product href="https://fontless.varld.co">
        <ProductImage>
          <img src="https://cdn.varld.co/logos/varld/light.svg" />
        </ProductImage>
        <ProductDescription>
          <div>
            <h2>Fontless</h2>
            <p>Host your own Google Fonts.</p>
          </div>
        </ProductDescription>
      </Product>

      <Spacer />

      <Bottom>
        <div className="bottom-inner">
          <LinkButton href="https://github.com/varld">GitHub</LinkButton>
          <LinkButton href="https://twitter.com/varld_co">Twitter</LinkButton>
          <LinkButton href="https://varld.co/inside">Blog</LinkButton>
        </div>
      </Bottom>
    </Wrapper>
  );
};
