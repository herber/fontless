import App from 'next/app';
import Head from 'next/head';
import '../styles/index.css';
import '../styles/variables.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>
          <title>Varld Fontless</title>

          <meta name="title" content="Fontless - Host your own Google Fonts." />
          <meta
            name="description"
            content="Fontless automatically generates and deploys a Google Fonts like webapp, just for you."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://fontless.varld.co/" />
          <meta property="og:title" content="Fontless - Host your own Google Fonts." />
          <meta
            property="og:description"
            content="Fontless automatically generates and deploys a Google Fonts like webapp, just for you."
          />
          <meta property="og:image" content="/ogcard.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://fontless.varld.co/" />
          <meta property="twitter:title" content="Fontless - Host your own Google Fonts." />
          <meta
            property="twitter:description"
            content="Fontless automatically generates and deploys a Google Fonts like webapp, just for you."
          />
          <meta property="twitter:image" content="/ogcard.png"></meta>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
