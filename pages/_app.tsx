import type { AppProps } from 'next/app';

import Head from 'next/head';

import React from 'react';

import '@styles/reset.css';

import '@styles/globals.css';

export default function App(properties: AppProps) {
  return (
    <html>
      <Head>
        <title>App</title>
      </Head>
      <body>
        <main>
          <properties.Component {...properties.pageProps} />
        </main>
      </body>
    </html>
  );
}
