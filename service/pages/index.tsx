import { useMemo } from 'react';
import styled from 'styled-components';
import { Center, Title, Card, Spacer } from '@varld/fontless-components';
import { Layout } from '../components/layout';
import data from '../public/fonts.json';
import { FontData } from '../interfaces/fontData';
import { Font } from '../components/font';
import { useFontStore } from '../state/font';
import Head from 'next/head';

let Fonts = styled.div``;

let FontLink = styled.div`
  word-break: break-all;
  font-family: monospace;
  font-size: 18px;
  font-weight: 500;
  color: var(--accent-5);
`;

let Home = () => {
  let selectedFonts = useFontStore(s => s.selectedFonts);

  let fontUrl = useMemo(() => {
    let fonts = Object.values(selectedFonts);
    if (fonts.length == 0 || typeof window == 'undefined') return 'Select fonts';

    let familyParam = fonts
      .map((font: any) => {
        return (
          font.variants.length > 0 &&
          `family=${encodeURIComponent(font.family)}:ital,wght@${font.variants
            .map(
              variant => (variant.fontStyle == 'italic' ? '1' : '0') + `,${variant.fontWeight}`
            )
            .join(';')}`
        );
      })
      .filter(v => typeof v == 'string')
      .join('&');

    if (familyParam.length == 0) return 'Select fonts';
    return `<link href="https://${window.location.host}/css?${familyParam}&display=swap" rel="stylesheet" />`;
  }, [selectedFonts]);

  return (
    <Layout name={data.name || 'Fontless'}>
      <Head>
        <title>{data.name || 'Fontless'}</title>
      </Head>

      <Center width="860px">
        <Title>{data.name || 'Fontless'}</Title>

        <Spacer height={20} />

        <Card title="Embed code" bigContents>
          <FontLink>{fontUrl}</FontLink>
        </Card>

        <Fonts>
          {data.fonts.map((font: FontData) => (
            <Font font={font} key={font.id} />
          ))}
        </Fonts>
      </Center>
    </Layout>
  );
};

export default Home;
