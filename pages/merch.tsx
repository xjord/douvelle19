import Merch from '../src/components/Merch';

import { createClient } from 'contentful';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const merch = await client.getEntries({
    content_type: 'merch',
  });

  return {
    props: {
      merch: merch.items,
    },
  };
};

const MerchPage = (props) => {
  const { merch } = props;

  return <Merch merch={merch} />;
};

export default MerchPage;
