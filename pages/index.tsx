import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Header";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Douvelle19</title>
        <meta name="description" content="Douvelle19 music producer and dj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation />
    </div>
  );
};

export default Home;
