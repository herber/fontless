import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-hook-inview';
import { Font as FontType } from '../../interfaces/font';
import { useFontStore } from '../../state/font';

declare global {
  interface Window {
    WebFont: any;
  }
}

let Wrapper = styled.div<{ isSelected: boolean }>`
  text-align: left;
  border: solid var(--accent-1) 1px;
  border-radius: 10px;
  height: 240px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;

  ${p =>
    p.isSelected &&
    `
    border: solid var(--primary) 1px;
    box-shadow: var(--primary) 0px 0px 0px 2px;
    `}
`;

let Text = styled.div<{ loaded: boolean }>`
  font-size: 2em;
  padding: 15px 20px;
  height: 200px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s;
  transform: translateY(20px);

  ${p =>
    p.loaded &&
    `
    opacity: 1;
    pointer-events: all;
    transform: translateY(0px);
  `}
`;

let More = styled.div`
  border-top: solid var(--accent-1) 1px;
`;

let Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 38px;
  height: 38px;
  padding: 0px 20px;
  overflow: hidden;
`;

export let Font = React.memo(({ font }: { font: FontType }) => {
  const [ref, isVisible] = useInView({
    threshold: 0
  });

  let loaded = useFontStore(s => s.loadedFonts.includes(font?.id));
  let loadFont = useFontStore(s => s.loadFont);
  let isSelected = useFontStore(s => s.selectedFonts.includes(font?.id));
  let selectFont = useFontStore(s => s.selectFont);

  useEffect(() => {
    if (!isVisible || typeof window == 'undefined' || loaded) return;
    loadFont(font);
  }, [isVisible, loaded]);

  return (
    <Wrapper ref={ref} isSelected={isSelected} onClick={() => selectFont(font)}>
      <Text loaded={loaded} style={{ fontFamily: font.name }}>
        The quick brown fox jumps over the lazy dog
      </Text>

      <More>
        <Name>{font.name}</Name>
      </More>
    </Wrapper>
  );
});
