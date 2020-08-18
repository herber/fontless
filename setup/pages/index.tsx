import styled from 'styled-components';
import { Center, Title, BigCopy, Spacer, Button } from '@varld/fontless-components';
import { Layout } from '../layout';
import { Highlight } from '../components/highlight';
import { BigTitle } from '../components/bigTitle';
import { Lock, Zap, UploadCloud } from 'react-feather';
import Link from 'next/link';

let Wrapper = styled.div`
  margin-top: 100px;
  min-height: calc(100vh - 180px);
  padding: 0px 15px;

  @media screen and (max-width: 720px) {
    margin-top: 50px;
  }
`;

let Top = styled.div`
  text-align: center;
`;

let Buttons = styled.div`
  width: fit-content;
  margin: 0px auto;
  display: flex;

  @media screen and (max-width: 720px) {
    display: block;

    button {
      margin: 5px auto;
    }
  }
`;

let Features = styled.div`
  max-width: 960px;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  margin: 150px auto 100px auto;

  @media screen and (max-width: 720px) {
    display: block;
  }
`;

let Feature = styled.div`
  margin: 10px;

  @media screen and (max-width: 720px) {
    margin-bottom: 20px;
  }
`;

let FeatureTop = styled.div`
  margin: 0px auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    margin: 0px auto;
    width: 30px;
    height: 30px;
  }
`;

let FeatureBody = styled.div`
  margin-top: 30px;
  text-align: center;

  h1 {
    font-size: 2.4em;
    margin: 0px;
  }

  p {
    font-size: 1.3em;
    margin: 20px 0px 0px 0px;
  }

  @media screen and (max-width: 720px) {
    h1 {
      font-size: 1.4em;
    }

    p {
      font-size: 1.1em;
    }
  }
`;

let ProductShowcase = styled.div`
  background: #f6f6f6;
  border-radius: 20px;

  @media screen and (min-width: 720px) {
    max-width: 960px;
    margin: 150px auto 100px auto;
    padding: 20px 0px 20px 30px;
    display: grid;
    grid-template-columns: 55% 45%;
  }

  @media screen and (max-width: 720px) {
    margin: 80px 0px 50px 0px;
  }
`;

let ShowcaseContent = styled.div`
  padding: 20px 15px;

  @media screen and (max-width: 720px) {
    padding: 25px 25px 20px 25px;
  }
`;

let ShowcaseImage = styled.div`
  @media screen and (max-width: 720px) {
    text-align: center;
    padding-bottom: 15px;

    img {
      width: 90%;
      max-width: 350px;
      margin: 0px auto;
    }
  }

  @media screen and (min-width: 720px) {
    padding-left: 30px;
    display: flex;

    img {
      width: calc(100% - 20px);
      float: right;
    }
  }
`;

let ShowcaseTitle = styled(Title)`
  font-size: 2.4em;
  margin: 2px 0px 9px 0px;

  @media screen and (max-width: 720px) {
    font-size: 1.8em;
  }
`;

let ShowcaseHeader = styled.div`
  font-size: 0.95em;
  font-weight: 700;
  color: #888;
`;

let ShowcaseText = styled.div`
  font-size: 1.3em;

  @media screen and (max-width: 720px) {
    font-size: 1.1em;
  }
`;

let Home = () => {
  return (
    <Layout>
      <Wrapper>
        <Top>
          <Center>
            <BigTitle>
              Host your <br />
              <Highlight startColor="#75C6FF" endColor="#3867D6">
                own Google Fonts.
              </Highlight>
            </BigTitle>
            <Spacer height={20} />
            <BigCopy>Fontless is the easiest way to self-host Google Fonts.</BigCopy>
            <Spacer height={35} />

            <Buttons>
              <Link href="/setup">
                <a>
                  <Button>Get started for free</Button>
                </a>
              </Link>
              <Spacer width={15} />
              <a
                href="https://fontless-demo.varld.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button display="secondary">Demo</Button>
              </a>
            </Buttons>
          </Center>
        </Top>

        <Features>
          <Feature>
            <FeatureTop
              style={{
                background: 'linear-gradient(45deg, #10ac84, #55efc4)',
                color: 'white'
              }}
            >
              <Lock />
            </FeatureTop>
            <FeatureBody>
              <h1>Privacy oriented</h1>
              <p>
                No cookies, no analytics, no tracking. Fontless is hosted by you and does not
                collect any data about anyone.
              </p>
            </FeatureBody>
          </Feature>

          <Feature>
            <FeatureTop
              style={{
                background: 'linear-gradient(45deg, #f0932b, #f9ca24)',
                color: 'white'
              }}
            >
              <Zap />
            </FeatureTop>
            <FeatureBody>
              <h1>Lightning fast</h1>
              <p>
                Fontless is built to be deployed to Vercel's fast CDN and heavily utilizes
                caching.
              </p>
            </FeatureBody>
          </Feature>

          <Feature>
            <FeatureTop
              style={{
                background: 'linear-gradient(45deg, #eb4d4b, #f78fb3)',
                color: 'white'
              }}
            >
              <UploadCloud />
            </FeatureTop>
            <FeatureBody>
              <h1>Automatic</h1>
              <p>
                No need to edit config-files or download anything. Fontless can be deployed and
                configured by clicking a few buttons.
              </p>
            </FeatureBody>
          </Feature>
        </Features>

        <Center width="900px">
          <Title>
            Fontless automatically generates and deploys a Google Fonts like webapp, just for
            you.
          </Title>
        </Center>

        <Spacer height={100} />

        <Center style={{ textAlign: 'center' }}>
          <Title>
            Host your <br />
            <Highlight startColor="#75C6FF" endColor="#3867D6">
              own Google Fonts.
            </Highlight>
          </Title>
          <Spacer height={35} />

          <Buttons>
            <Link href="/setup">
              <a>
                <Button>Get started for free</Button>
              </a>
            </Link>
            <Spacer width={15} />
            <a
              href="https://github.com/varld/fontless"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button display="secondary">Source code</Button>
            </a>
          </Buttons>
        </Center>

        <ProductShowcase>
          <ShowcaseContent>
            <ShowcaseHeader>More from Varld</ShowcaseHeader>
            <ShowcaseTitle>Launchbase</ShowcaseTitle>
            <ShowcaseText>
              Everything you need to collect and understand beta-users. Including an embeddable
              widget, powerful analytics, followup questions and more.
            </ShowcaseText>
            <Spacer height={15} />
            <a href="https://varld.co/launchbase" target="_blank" rel="noopener noreferrer">
              <Button display="primary">Learn more</Button>
            </a>
          </ShowcaseContent>
          <ShowcaseImage>
            <img
              src="https://cdn.varld.co/launchbase/illustrations/insights-single.svg"
              alt="An image showcasing an record of a beta-user in Launchbase"
            />
          </ShowcaseImage>
        </ProductShowcase>
      </Wrapper>
    </Layout>
  );
};

export default Home;
