import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  Title,
  BigCopy,
  Mark,
  Center,
  Spacer,
  Modal,
  Button,
  Input
} from '@varld/fontless-components';
import { createFontServiceConfig } from '../../lib/createFontServiceConfig';
import { Font } from '../../interfaces/font';
import { useFontStore } from '../../state/font';
import { download } from '../../lib/download';
import { config } from '../../config';
import { getRepoContents } from '../../lib/getRepoContents';
import { zipRepo } from '../../lib/zipRepo';
import { LaunchbaseAd } from '../launchbaseAd';

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

let Buttons = styled.div`
  display: flex;
  width: fit-content;
  margin: 0px auto;

  button:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export let ExportScene = ({
  fonts,
  onDeploy
}: {
  fonts: Font[];
  onDeploy: (token: string, name: string) => void;
}) => {
  let [exportModalOpen, setExportModalOpen] = useState<string>();
  let [name, setName] = useState('');
  let selectedFonts = useFontStore(s => s.selectedFonts);
  let windowRef = useRef<Window>();
  let [showAd, setShowAd] = useState(false);
  let [loading, setLoading] = useState(false);

  let onDownloadClick = async () => {
    setLoading(true);

    let data = createFontServiceConfig(fonts, selectedFonts, name);
    let contents = await getRepoContents({ org: 'varld', repo: 'fontless', path: 'service' });
    let zip = await zipRepo(contents, JSON.stringify(data, undefined, 2));
    download('fontless.zip', 'application/zip', zip);

    setExportModalOpen(undefined);

    setShowAd(true);

    setTimeout(() => {
      setName('');
      setLoading(false);
    }, 250);
  };

  let onDeployClick = () => {
    windowRef.current = window.open(
      `https://vercel.com/oauth/authorize?client_id=${config.vercel.clientId}`,
      'Varld Fontless Auth',
      'width=800,height=600,status=yes,scrollbars=yes,resizable=yes'
    );
  };

  useEffect(() => {
    if (typeof window == 'undefined') return;

    let handler = (e: MessageEvent) => {
      if (typeof e.data == 'string' && e.data.startsWith('token:')) {
        let token = e.data.substr(6);

        if (windowRef.current) {
          windowRef.current.close();
          windowRef.current = null;
        }

        onDeploy(token, name);
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [windowRef.current, name]);

  return (
    <>
      <Wrapper>
        <Center width="720px">
          <Title>Setup Fontless Service</Title>
          <Spacer height={10} />
          <BigCopy>
            <Mark>We have configured the Fontless Service to support your fonts.</Mark>
          </BigCopy>
          <Spacer height={10} />
          <div>
            Fonts are copyright of their respective authors.{' '}
            <a
              href="https://fonts.google.com/attribution"
              target="_blank"
              rel="noopener noreferrer"
            >
              Licenses
            </a>
          </div>
          <div>
            Font data provided by{' '}
            <a
              href="http://google-webfonts-helper.herokuapp.com/fonts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Webfonts Helper
            </a>
            .
          </div>

          <Spacer height={50} />

          <Buttons>
            <Button onClick={() => setExportModalOpen('download')}>Download</Button>
            <Button display="primary" onClick={() => setExportModalOpen('deploy')}>
              Deploy to Vercel
            </Button>
          </Buttons>
        </Center>
      </Wrapper>
      <Modal
        open={exportModalOpen != undefined}
        onClose={() => setExportModalOpen(undefined)}
        title="Name Fontless Service"
        buttons={[
          {
            children: 'Cancel',
            display: 'secondary',
            disabled: loading,
            onClick: () => setExportModalOpen(undefined)
          },
          {
            children: loading
              ? 'Loading'
              : exportModalOpen == 'deploy'
              ? 'Deploy to Vercel'
              : 'Download Fontless',
            disabled: loading,
            display: 'primary',
            onClick: exportModalOpen == 'deploy' ? onDeployClick : onDownloadClick
          }
        ]}
      >
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter a name"
        />
      </Modal>

      <LaunchbaseAd open={showAd} onClose={() => setShowAd(false)} />
    </>
  );
};
