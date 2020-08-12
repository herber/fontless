import styled from 'styled-components';
import Head from 'next/head';
import { Button } from '@varld/fontless-components';

let Wrapper = styled.div`
  height: 100%;
  margin: 0px auto;
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 15px;

  button {
    max-width: 300px;
    margin: 0px auto;
  }
`;

let Title = styled.h1`
  font-size: 3.4em;
  margin-bottom: 0px;

  @media screen and (max-width: 720px) {
    font-size: 1.8em;
  }
`;

let More = styled.h1`
  font-size: 1.8em;
  color: #888;
  margin-top: 10px;
  margin-bottom: 35px;

  @media screen and (max-width: 720px) {
    font-size: 1.2em;
  }
`;

export let NotFound = () => {
  return (
    <Wrapper>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div>
        <Title>Not Found</Title>
        <More>The requested resource does not exist or you don't have access to it.</More>
        <a href="https://fontless.varld.co">
          <Button>Back to Fontless</Button>
        </a>
      </div>
    </Wrapper>
  );
};

export default NotFound;
