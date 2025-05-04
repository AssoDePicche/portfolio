const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/u/86676526?v=4')
    ],
    unoptimized: true,
  },
  output: 'export',
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'source/styles');

    config.resolve.alias['@components'] = path.join(__dirname, 'source/components');

    return config;
  },
};
