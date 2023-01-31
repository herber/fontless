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
      },
      {
        source: '/health',
        destination: '/api/health'
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ]
  },
};
