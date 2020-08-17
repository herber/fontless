import axios from 'axios';
import url from 'url';
import { config } from '../../config';

export let getVercelAccessToken = async (code: string) => {
  let params = new url.URLSearchParams({
    code,
    client_secret: config.vercel.clientSecret,
    client_id: config.vercel.clientId,
    redirect_uri: config.vercel.redirectUri
  });

  let res = await axios.post(
    'https://api.vercel.com/v2/oauth/access_token',
    params.toString()
  );

  return res.data.access_token;
};
