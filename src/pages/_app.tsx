/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import theme from '@src/theme';
import 'fontsource-work-sans';
import 'fontsource-poppins';
import '@src/style/main.css';

class CustomApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }
}

export default CustomApp;
