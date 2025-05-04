import { NextConfig } from 'next';

import path from 'path';

const productionEnv: boolean = 'production' === process.env.NODE_ENV;

const repository: string = 'portfolio';

const nextConfig: NextConfig = {
  assetPrefix: productionEnv ? `/${repository}` : '',
  basePath: productionEnv ? `/${repository}` : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/86676526**',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@components': path.join(__dirname, 'source/components'),
      '@styles': path.join(__dirname, 'source/styles'),
    };

    return config;
  },
};

module.exports = nextConfig;
