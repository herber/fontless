import * as fs from 'fs';
import JSZip from 'jszip';
import fetch from 'node-fetch'
import { fetchFonts } from '../server/lib/fetchFonts';
import { createFontServiceConfig } from '../lib/createFontServiceConfig';
import { getRepoContents } from '../lib/getRepoContents';
import { zipRepo } from '../lib/zipRepo';

if (!globalThis.fetch) {
  // @ts-ignore
  globalThis.fetch = fetch
}

const selectedFonts = []; // all
const name = 'thn-fontless-service';
(async function () {
    const fonts = await fetchFonts();

    let data = createFontServiceConfig(fonts, selectedFonts, name);
    let contents = await getRepoContents({ org: 'the-hotels-network', repo: 'fontless', path: 'service' });
    let zip = await zipRepo(contents, JSON.stringify(data, undefined, 2), true);
    if (zip instanceof JSZip) {
        zip.generateNodeStream({ type:'nodebuffer', streamFiles: true })
            .pipe(fs.createWriteStream('deployment.zip'))
            .on('finish', function () {
                // JSZip generates a readable stream with a "end" event,
                // but is piped here in a writable stream which emits a "finish" event.
                console.log('> deployment.zip written');
            });
    }
}());
