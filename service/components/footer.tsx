import styled from 'styled-components';
import { SimpleButton } from '@varld/fontless-components';

let Wrapper = styled.div`
  padding: 20px 30px;
  margin-top: 50px;
  display: flex;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }
`;

let Left = styled.div`
  flex-grow: 1;
  line-height: 20px;
  font-size: 14px;
`;

let Right = styled.div`
  display: flex;
  margin-top: 5px;

  a {
    margin-left: 10px;
  }

  @media screen and (max-width: 720px) {
    width: fit-content;
    margin: 0px auto;
  }
`;

export let Footer = () => {
  return (
    <Wrapper>
      <Left>
        Powered by{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://fontless.varld.co/">
          Varld Fontless
        </a>
        <br />
        Fonts are copyright of their respective authors.{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fonts.google.com/attribution"
        >
          Licenses
        </a>
      </Left>
      <Right>
        <a href="https://varld.co" target="_blank" rel="noopener noreferrer">
          <SimpleButton>Varld</SimpleButton>
        </a>
        <a href="https://fontless.varld.co/" target="_blank" rel="noopener noreferrer">
          <SimpleButton>Fontless</SimpleButton>
        </a>
        <a href="https://github.com/varld/fontless" target="_blank" rel="noopener noreferrer">
          <SimpleButton>Source</SimpleButton>
        </a>
      </Right>
    </Wrapper>
  );
};
