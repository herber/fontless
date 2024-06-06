<h1 align="center">
  Fontless
</h1>
<p align="center">A simple way to self-host google fonts.</p>

## Features

- ⚡️ Lightning Fast - Fontless instances are hosted by [Vercel's](https://vercel.com) super fast, global CDN.
- 🚀 Simple Setup - Fontless instances can be configured and deployed in a browser.
- 🔒 Privacy Oriented - No tracking, no cookies, no analytics. Just fonts.
- 😎 Google Fonts-like API - All you need to do is to change the hostname. Fontless has full support for the Google Fonts CSS2 API.
- ☝️ It's yours - Fontless is open source and self-hosted. You don't have to trust a black box.

## Motivation

Let's be honest, we all know that Google uses Google Fonts to collect data. We give them our users data for free and all we want in exchange is a simple way to use webfonts. Fontless aims to provide the same simplicity, but for self-hosted fonts. The web-interface is built to be easy-to-use, even for less tech-savvy people.

Fontless aims to give you the same comfort you get from Google Fonts for self-hosted fonts.

## Setup 

1. Visit start the fontless service
2. Select the fonts you want
3. Deploy to [Vercel](https://vercel.com) right from your browser or download the generated Fontless Service.

## Usage

Once you have set up and deployed your Fontless Service, you can visit its domain and select the fonts you want to use. After that you can embed the generated `link`-tag in your application.

You can also migrate from Google Fonts to Fontless by replacing `fonts.googleapis.com` with your Fontless Service's hostname. Fontless has full support for the Google Fonts CSS2 API. 

## How it works

Fontless consists of two parts: Fontless Setup and the Fontless Service. 

### Fontless Setup

Fontless Setup is a webapp used to configure and deploy a Fontless Service. It periodically requests font data from [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper) to provide an up-to-date list of all Google Fonts. After you have configured your Fontless Service, a `fontless.config.json`-file will be generated. After that the most up-to-date Fontless Service will be downloaded from GitHub. Depending on what you choose the Fontless Service and `fontless.config.json` will either be zipped and downloaded to your computer or they will be deployed to Vercel.

### Fontless Service

The Fontless Service serves all configured fonts. It consists of two parts, a frontend and a serverless function, which implements the Google Fonts CSS2 API.

The Frontend is completely static and generated at build-time.

All fonts are downloaded from Google Fonts at build-time and are placed in the `/fonts` directory. The build-process also generates a `/fonts.json`-file which is used by the serverless function and for importing an existing Fontless Service in the Fontless Setup. `fonts.json` contains a list of all fonts and their variants including the paths where they can be requested.

## License

MIT © [Tobias Herber](https://herber.space)
