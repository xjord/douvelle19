import TourDates from '../src/components/TourDates';

import { createClient } from 'contentful';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const songKick = await client.getEntries({
    content_type: 'songkickWidget',
  });

  return {
    props: {
      songKick: songKick.items,
    },
  };
};

const DatesPage = (props) => {
  const { songKick } = props;

  return <TourDates songKick={songKick} />;
};

export default DatesPage;
