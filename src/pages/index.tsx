import React, { ReactNode } from 'react';
import Head from 'next/head';

export default function Home(): ReactNode {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>We-Are-Sorry</h1>
      </main>
    </div>
  );
}
