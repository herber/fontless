import styled from 'styled-components';
import { Title, BigCopy, Mark, Center, Spacer, Loading } from '@varld/fontless-components';
import { createFontServiceConfig } from '../../lib/createFontServiceConfig';
import { Font } from '../../interfaces/font';
import { useFontStore } from '../../state/font';
import { useState, useEffect } from 'react';
import { createDeployment } from '../../lib/createDeployment';
import { getRepoContents } from '../../lib/getRepoContents';
import { getDeployment } from '../../lib/getDeployment';

let Wrapper = styled.div`
  text-align: center;
  margin-top: calc(15vh + 70px);
  min-height: calc(85vh - 250px);
  padding: 0px 10px;

  @media screen and (max-width: 720px) {
    margin-top: 100px;
    min-height: calc(100vh - 170px);
  }
`;

export let DeployScene = ({
  fonts,
  token,
  name
}: {
  fonts: Font[];
  token: string;
  name: string;
}) => {
  let selectedFonts = useFontStore(s => s.selectedFonts);
  let [error, setError] = useState(false);

  useEffect(() => {
    if (!token || !name) return;
    let iv: number;

    let handler = async () => {
      let data = createFontServiceConfig(fonts, selectedFonts, name);
      let contents = await getRepoContents({
        org: 'varld',
        repo: 'fontless',
        path: 'service'
      });
      let res = await createDeployment(token, name || 'fontless', data, contents);

      iv = setInterval(async () => {
        let data = await getDeployment(token, res.id);

        if (data.status == 'READY') {
          let alias = data.alias[0];

          for (let a of data.alias) {
            if (!a.endsWith('.vercel.app')) {
              alias = a;
              break;
            }
          }

          window.location.href = `https://${alias}`;
        }
      }, 5000);
    };

    handler().catch(err => setError(true));

    return () => clearInterval(iv);
  }, [token, name]);

  return (
    <Wrapper>
      <Center width="720px">
        <Title>Deploying Fontless Service</Title>
        <Spacer height={10} />

        {error ? (
          <BigCopy>
            <Mark color="var(--danger)">An error occurred.</Mark>
          </BigCopy>
        ) : (
          <>
            <BigCopy>
              <Mark>This might take few minutes.</Mark>
            </BigCopy>

            <Spacer height={50} />

            <Loading />
          </>
        )}
      </Center>
    </Wrapper>
  );
};
