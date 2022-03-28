import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="gtagmanager"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      ;
      <Script id="gtag" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', ${process.env.GA_MEASUREMENT_ID});
        `}
      </Script>
      <Head>
        <title>Douvelle19</title>
        <meta name="description" content="Douvelle19 music producer and dj" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
