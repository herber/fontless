export let config = {
  vercel: {
    clientId: process.env.VC_CLIENT_ID,
    clientSecret: process.env.VC_CLIENT_SECRET,
    redirectUri: process.env.VC_REDIRECT_URI
  }
};
