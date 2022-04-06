import type { AppProps } from 'next/app';

import Layout from '../src/components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
