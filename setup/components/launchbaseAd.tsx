import styled from 'styled-components';
import { Title as BaseTitle, Spacer, Button, SimpleButton } from '@varld/fontless-components';
import { X } from 'react-feather';

let Wrapper = styled.div<{ open: boolean }>`
  background: black;
  color: white;
  border-radius: 20px;
  position: fixed;
  transition: all 0.3s;
  left: 30px;
  right: 30px;
  max-width: 960px;
  margin: 0px auto 0px auto;
  padding: 20px 30px 20px 30px;
  text-align: left;

  @media screen and (max-width: 720px) {
    left: 0px;
    right: 0px;
    padding: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  ${p =>
    p.open
      ? `
    bottom: 30px;
    opacity: 1;
    pointer-events: all;
  `
      : `
    bottom: -50px;
    opacity: 0;
    pointer-events: none;
  `}

  @media screen and (max-width: 720px) {
    ${p =>
      p.open
        ? `
    bottom: 0px;
  `
        : `
    bottom: -40px;
  `}
  }
`;

let Content = styled.div`
  padding: 20px 15px;

  @media screen and (max-width: 720px) {
    padding: 25px 25px 20px 25px;
  }
`;

let Title = styled(BaseTitle)`
  font-size: 2.4em;
  margin: 2px 0px 9px 0px;

  @media screen and (max-width: 720px) {
    font-size: 1.8em;
  }
`;

let Header = styled.div`
  font-size: 0.95em;
  font-weight: 700;
  color: #888;
`;

let Text = styled.div`
  font-size: 1.3em;

  @media screen and (max-width: 720px) {
    font-size: 1.1em;
  }
`;

export let LaunchbaseAd = ({ open, onClose }: { open: boolean; onClose: () => any }) => {
  return (
    <Wrapper open={open}>
      <SimpleButton
        onClick={onClose}
        style={{ position: 'absolute', right: 20, top: 20, color: '#aaa' }}
      >
        <X />
      </SimpleButton>
      <Content>
        <Header>More from Varld</Header>
        <Title>Launchbase</Title>
        <Text>
          Everything you need to collect and understand beta-users. Including an embeddable
          widget, powerful analytics, followup questions and more.
        </Text>
        <Spacer height={15} />
        <a href="https://launchbase.work" target="_blank" rel="noopener noreferrer">
          <Button display="primary">Learn more</Button>
        </a>
      </Content>
    </Wrapper>
  );
};
