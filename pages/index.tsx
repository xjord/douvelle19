import Head from 'next/head';
import { createClient } from 'contentful';

import { ITourDates } from '../src/models/index';
import Header from '../src/components/Header';
import Socials from '../src/components/Socials';
import Navigation from '../src/components/Navigation';
import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const banner = await client.getEntries({
    content_type: 'homeBanner',
  });

  const logo = await client.getEntries({
    content_type: 'logo',
  });

  const contacts = await client.getEntries({
    content_type: 'contact',
  });

  const music = await client.getEntries({
    content_type: 'music',
  });

  const socials = await client.getEntries({
    content_type: 'socialLink',
  });

  const merch = await client.getEntries({
    content_type: 'merch',
  });

  const primaryColour = await client.getEntries({
    content_type: 'primaryColour',
  });

  const videos = await client.getEntries({
    content_type: 'video',
  });

  return {
    props: {
      contacts: contacts.items,
      logo: logo.items[0].fields,
      banner: banner.items[0].fields,
      socials: socials.items,
      merch: merch.items,
      videos: videos.items,
    },
  };
};

interface NextPageProps {
  tourDates: ITourDates[];
}

const Home = (props: NextPageProps) => {
  const { logo, socials } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Douvelle19</title>
        <meta name="description" content="Douvelle19 music producer and dj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Socials socials={socials} />
      <Header logo={logo} />
      <Navigation data={props} />
    </div>
  );
};

export default Home;
