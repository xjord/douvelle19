import { createClient } from 'contentful';

import Banner from '../src/components/Banner';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
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

  return <Banner banner={banner} />;
};

export default Home;
