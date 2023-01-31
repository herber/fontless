import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ 'status': 'ok' });
};
