import { createClient } from 'contentful';

import Layout from '../src/components/Layout/Layout';
import Banner from '../src/components/Banner';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const banner = await client.getEntries({
    content_type: 'homeBanner',
  });

  return {
    props: {
      banner: banner.items[0].fields,
    },
  };
};

const Home = (props) => {
  const { banner } = props;

  return (
    <Layout>
      <Banner banner={banner} />
    </Layout>
  );
};

export default Home;
