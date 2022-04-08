import TourDates from '../src/components/TourDates';

import { createClient } from 'contentful';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
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

const DatesPage = ({ songKick }) => {
  return <TourDates songKick={songKick} />;
};

export default DatesPage;
