import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import Header from '../Header';
import Socials from '../Socials';
import Navigation from '../Navigation';
import { fetchContentfulData } from '../../utils/helpers';
import { ChildrenWrapper } from './Layout.styles';

const Layout = (props) => {
  const { children } = props;

  const [data, setData] = useState({});

  useEffect(() => {
    const res = fetchContentfulData();
    res.then((data) => setData(data));
  }, []);

  const logo = data?.logo?.fields.file.url;
  const socials = data?.socials;

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
      {logo && <Header logo={logo} />}
      <Socials socials={socials} />
      <Navigation />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  );
};

export default Layout;
