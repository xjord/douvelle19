import Videos from '../src/components/Videos';

import { createClient } from 'contentful';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const videos = await client.getEntries({
    content_type: 'video',
  });

  return {
    props: {
      videos: videos.items,
    },
  };
};

const MusicPage = (props) => {
  const { videos } = props;

  return <Videos videos={videos} />;
};

export default MusicPage;
