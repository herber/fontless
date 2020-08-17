import { NextApiRequest, NextApiResponse } from 'next';
import { getVercelAccessToken } from '../../../server/lib/getVercelAccessToken';
import { missingCodeError } from '../../../server/errors/missingCode';

let exchangeVercelCode = async (req: NextApiRequest, res: NextApiResponse) => {
  let code = Array.isArray(req.query.code) ? req.query.code[0] : req.query.code;
  if (!code) return res.status(406).send(missingCodeError);

  let accessToken = await getVercelAccessToken(code);

  res.status(307).redirect(`/back/vercel?accessToken=${accessToken}`);
};

export default exchangeVercelCode;
