import Head from "next/head";
import { createClient } from "contentful";

import { ITourDates } from "../src/models/index";
import Header from "../src/components/Header";
import Socials from "../src/components/Socials";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  const res = await client.getEntries({
    content_type: ["homeBanner", "logo"],
  });

  return {
    props: {
      logo: res.items[0],
      banner: res.items[1],
    },
  };
};

interface NextPageProps {
  tourDates: ITourDates[];
}

const Home = (props: NextPageProps) => {
  const { logo } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Douvelle19</title>
        <meta name="description" content="Douvelle19 music producer and dj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Socials />
      <Header logo={logo} />
      <Navigation data={props} />
    </div>
  );
};

export default Home;
