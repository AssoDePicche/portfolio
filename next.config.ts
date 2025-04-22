const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'source/styles');
    return config;
  },
};
