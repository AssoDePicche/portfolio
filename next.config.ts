import type { Configuration } from 'webpack';

import type { NextConfig } from 'next';

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
  webpack: (configuration: Configuration): Configuration => {
    if (!configuration.resolve) {
      configuration.resolve = {};
    }

    configuration.resolve.alias = {
      ...(configuration.resolve.alias || {}),
      '@components': path.join(__dirname, 'source/components'),
      '@styles': path.join(__dirname, 'source/styles'),
    };

    return configuration;
  },
};

export default nextConfig;
