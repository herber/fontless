import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-hook-inview';
import { FontData, FontVariant } from '../interfaces/fontData';
import { useFontStore } from '../state/font';
import { Check } from './check';

declare global {
  interface Window {
    WebFont: any;
  }
}

let Wrapper = styled.div`
  text-align: left;
  border: solid var(--accent-1) 1px;
  border-radius: 10px;
  transition: all 0.3s;
  margin-top: 20px;

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: 300px auto;
    height: 260px;
  }
`;

let Text = styled.div<{ loaded: boolean }>`
  font-size: 2em;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s;
  transform: translateY(20px);

  @media screen and (min-width: 720px) {
    height: 200px;
  }

  ${p =>
    p.loaded &&
    `
    opacity: 1;
    pointer-events: all;
    transform: translateY(0px);
  `}
`;

let Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  margin-bottom: 10px;
`;

let Info = styled.div`
  padding: 20px 25px 0px 25px;

  @media screen and (min-width: 720px) {
    border-right: solid var(--accent-1) 1px;
  }

  @media screen and (max-width: 720px) {
    padding: 20px 25px 15px 25px;
    border-bottom: solid var(--accent-1) 1px;
  }
`;

let Options = styled.div`
  padding: 20px;

  @media screen and (min-width: 720px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 24px 24px 24px 24px 24px 24px 24px 24px 24px 24px 24px 24px 24px;
    grid-row-gap: 15px;
    height: 260px;
    overflow: scroll;
  }
`;

let Variant = styled.div`
  display: flex;
  height: 24px;

  @media screen and (max-width: 720px) {
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;
let VariantName = styled.div`
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  margin-left: 10px;
  font-size: 14px;
`;

let getVariantName = (variant: FontVariant) => {
  let prefix = 'Regular';
  if (variant.fontWeight == '100' || variant.fontWeight == '200') prefix = 'Very light';
  if (variant.fontWeight == '300') prefix = 'Light';
  if (variant.fontWeight == '500' || variant.fontWeight == '600') prefix = 'Semi-bold';
  if (variant.fontWeight == '700') prefix = 'Bold';
  if (variant.fontWeight == '800' || variant.fontWeight == '900') prefix = 'Extra';

  return `${prefix} ${variant.fontWeight} ${variant.fontStyle == 'italic' ? 'italic' : ''}`;
};

export let Font = React.memo(({ font }: { font: FontData }) => {
  const [ref, isVisible] = useInView({
    threshold: 0
  });

  let loaded = useFontStore(s => s.loadedFonts.includes(font?.id));
  let loadFont = useFontStore(s => s.loadFont);
  let selection = useFontStore(s => s.selectedFonts[font?.id]);
  let selectFont = useFontStore(s => s.selectFont);

  useEffect(() => {
    if (!isVisible || typeof window == 'undefined' || loaded) return;
    loadFont(font);
  }, [isVisible, loaded]);

  return (
    <Wrapper ref={ref}>
      <Info>
        <Name>{font.family}</Name>
        <Text loaded={loaded} style={{ fontFamily: font.family }}>
          The quick brown fox jumps over the lazy dog
        </Text>
      </Info>
      <Options>
        {font.variants.map(variant => (
          <Variant onClick={() => selectFont(font, variant)} key={font.id + variant.id}>
            <Check checked={selection && selection.variantsIds.includes(variant.id)} />
            <VariantName>{getVariantName(variant)}</VariantName>
          </Variant>
        ))}
      </Options>
    </Wrapper>
  );
});
