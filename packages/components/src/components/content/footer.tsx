import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

let Wrapper = styled.div`
  text-align: center;
  padding: 30px 15px 0px 15px;
  background: var(--accent-0);
  border-top: solid var(--accent-1) 1px;

  img {
    height: 40px;
    width: 40px;
  }

  h2 {
    font-size: 1em;
  }

  .copy {
    font-size: 14px;
    margin-top: 30px;
    height: 40px;
  }
`;

let LinkBar = styled.div`
  margin: 15px 0px;

  a {
    color: #888;
    padding: 5px 10px;
    transition: all 0.3s;
    font-weight: 500;
    font-size: 14px;
    border-radius: 5px;

    &:hover {
      background: #efefef;
      color: #444;
    }

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;

export let Footer = () => {
  return (
    <Wrapper>
      <img src="https://cdn.varld.co/logos/varld/logo.svg" />
      <h2>Fontless by Varld</h2>

      <LinkBar>
        <Link href="/" as="/">
          <a>Home</a>
        </Link>

        <a href="https://github.com/varld/fontless" target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </LinkBar>

      <p>
        Fontless is made by Varld. <br />
        Varld is a small product studio from Austria.
      </p>
      <LinkBar>
        <a href="https://varld.co" target="_blank" rel="noopener noreferrer">
          Varld
        </a>
        <a href="https://twitter.com/varld_co" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/varld" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </LinkBar>

      <LinkBar>
        <a href="https://varld.co/legal/terms" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>
        <a href="https://varld.co/legal/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </LinkBar>

      <p className="copy">
        Copyright &copy; {new Date().getFullYear()} Varld. All rights reserved.
      </p>
    </Wrapper>
  );
};
