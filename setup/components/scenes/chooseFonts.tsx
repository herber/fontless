import styled from 'styled-components';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Title, BigCopy, Mark, Center, Spacer } from '@varld/fontless-components';
import { Font as FontType } from '../../interfaces/font';
import { Fonts } from '../fonts';
import { SelectionBar } from '../fonts/selectionBar';

let Wrapper = styled.div`
  text-align: center;
  margin-top: 130px;
  min-height: calc(100vh - 200px);

  @media screen and (max-width: 720px) {
    margin-top: 60px;
    min-height: calc(100vh - 130px);
  }
`;

let variants: any = {
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: 'all',
    transition: { duration: 0.3, delay: 0.2 }
  },
  hiddenInitial: {
    opacity: 0,
    y: 50,
    pointerEvents: 'none'
  }
};

export let ChooseFontsScene = React.memo(
  ({ fonts, onContinue }: { fonts: FontType[]; onContinue: () => void }) => {
    return (
      <>
        <Wrapper>
          <Center width="1080px">
            <Title>Choose your fonts.</Title>
            <Spacer height={30} />
            <BigCopy>
              <Mark>The fonts you select will be offered by your font service.</Mark>
            </BigCopy>

            <AnimatePresence>
              {Array.isArray(fonts) && (
                <motion.div initial={variants.hiddenInitial} animate={variants.visible}>
                  <Fonts fonts={fonts} />
                </motion.div>
              )}
            </AnimatePresence>
          </Center>
        </Wrapper>
        <SelectionBar onContinue={onContinue} />
      </>
    );
  }
);
