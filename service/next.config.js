module.exports = {
  async rewrites() {
    return [
      {
        source: '/css',
        destination: '/api/css'
      },
      {
        source: '/css2',
        destination: '/api/css'
      }
    ];
  }
};
