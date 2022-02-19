import Head from "next/head";
import { createClient } from "contentful";

import { ITourDates } from "../src/models/index";
import Header from "../src/components/Header";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  const res = await client.getEntries({ content_type: "tourDate" });

  return {
    props: {
      tourDates: res.items,
    },
  };
};

interface NextPageProps {
  tourDates: ITourDates[];
}

const Home = (props: NextPageProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Douvelle19</title>
        <meta name="description" content="Douvelle19 music producer and dj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation data={props} />
    </div>
  );
};

export default Home;
