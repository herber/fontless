import { NextApiRequest, NextApiResponse } from 'next';
import nextCors from 'nextjs-cors';
import { missingFamilyError } from '../../server/errors/missingFamily';
import { invalidFontDisplayError } from '../../server/errors/invalidFontDisplay';
import { parseFamilyParam } from '../../server/parseFamilyParam';
import { getVariants } from '../../server/getVariants';
import { getCss } from '../../server/getCss';

let fonts = require('../../public/fonts.json').fonts;

export default async (req: NextApiRequest, res: NextApiResponse) => {

  await nextCors(req, res, {
    origin: '*',
  });

  let family = Array.isArray(req.query.family) ? req.query.family : [req.query.family];
  if (typeof req.query.family == 'undefined' || family.length == 0) {
    return res.status(406).send(missingFamilyError);
  }

  let display = Array.isArray(req.query.display) ? req.query.display[0] : req.query.display;
  if (display && !['block', 'swap', 'auto', 'fallback', 'optional'].includes(display)) {
    return res.status(406).send(invalidFontDisplayError);
  }

  let parsedFonts = parseFamilyParam(family, res);
  if (res.headersSent || !parsedFonts) return;

  let variants = getVariants(parsedFonts, fonts);

  // We use relative path for the assets. Alternative:
  // const host = `https://${req.headers.host}`;
  const host = '.';
  let css = getCss(host, variants, display);

  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', `max-age=${60 * 10}, s-maxage=${60 * 60 * 6}`);
  res.send(css);
};
