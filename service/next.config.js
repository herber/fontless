module.exports = {
  async rewrites() {
    return [
      {
        source: '/css',
        destination: '/api/css'
      }
    ];
  }
};
