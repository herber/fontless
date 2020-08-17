import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Layout } from '../../layout';
import { ChooseFontsScene } from '../../components/scenes/chooseFonts';
import { Font as FontType } from '../../interfaces/font';
import { getFonts } from '../../operations/getFonts';
import { ExportScene } from '../../components/scenes/export';
import { DeployScene } from '../../components/scenes/deploy';

let variants: any = {
  visible: {
    opacity: 1,
    x: 0,
    pointerEvents: 'all',
    transition: { duration: 0.45, delay: 0.5 }
  },
  hiddenAfter: {
    opacity: 0,
    x: -50,
    pointerEvents: 'none',
    transition: { duration: 0.45 }
  },
  hiddenInitial: {
    opacity: 0,
    x: 50,
    pointerEvents: 'none',
    transition: { duration: 0.45 }
  }
};

let firstVisible: any = {
  opacity: 1,
  x: 0,
  pointerEvents: 'all',
  transition: { duration: 0.45, delay: 0.5 }
};

let Animated = styled(motion.div)``;

let Setup = () => {
  let [scene, setScene] = useState(0);
  let [token, setToken] = useState<string>();
  let [name, setName] = useState<string>();
  let [fonts, setFonts] = useState<FontType[]>();

  useEffect(() => {
    getFonts().then(fonts => setFonts(fonts));
  }, []);

  return (
    <Layout>
      <AnimatePresence>
        {scene == 0 && (
          <Animated
            initial={variants.hiddenInitial}
            animate={firstVisible}
            exit={variants.hiddenAfter}
            key="choose"
          >
            <ChooseFontsScene
              fonts={fonts}
              onContinue={() => {
                setScene(1);
                window.scrollTo(0, 0);
              }}
            />
          </Animated>
        )}

        {scene == 1 && (
          <Animated
            initial={variants.hiddenInitial}
            animate={variants.visible}
            exit={variants.hiddenAfter}
            key="export"
          >
            <ExportScene
              fonts={fonts}
              onDeploy={(t, n) => {
                setScene(2);
                setToken(t);
                setName(n || 'Fontless');
              }}
            />
          </Animated>
        )}

        {scene == 2 && token && name && (
          <Animated
            initial={variants.hiddenInitial}
            animate={variants.visible}
            exit={variants.hiddenAfter}
            key="export"
          >
            <DeployScene fonts={fonts} token={token} name={name} />
          </Animated>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Setup;
