import { NextApiRequest, NextApiResponse } from 'next';
import { fetchFonts } from '../../server/lib/fetchFonts';
import { fontsPresenter } from '../../server/presenter/fonts';

let getFonts = async (req: NextApiRequest, res: NextApiResponse) => {
  let fonts = await fetchFonts();

  res.setHeader('Cache-Control', `max-age=${60 * 10}, s-maxage=${60 * 60 * 6}`);
  res.status(200).send({ fonts: fontsPresenter(fonts) });
};

export default getFonts;
