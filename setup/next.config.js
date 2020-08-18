module.exports = {
  env: {
    VC_CLIENT_ID: process.env.VC_CLIENT_ID,
    VC_CLIENT_SECRET: process.env.VC_CLIENT_SECRET,
    VC_REDIRECT_URI: process.env.VC_REDIRECT_URI
  },
  build: {
    env: {
      VC_CLIENT_ID: process.env.VC_CLIENT_ID,
      VC_CLIENT_SECRET: process.env.VC_CLIENT_SECRET,
      VC_REDIRECT_URI: process.env.VC_REDIRECT_URI
    }
  }
};
