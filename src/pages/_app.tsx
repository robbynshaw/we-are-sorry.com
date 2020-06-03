import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
// import 'style/main.css';

function App({ Component, pageProps }: AppProps): ReactNode {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default App;
