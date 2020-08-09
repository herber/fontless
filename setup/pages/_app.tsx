import App from 'next/app';
import '../styles/index.css';
import '../styles/variables.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
