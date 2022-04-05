import Music from '../src/components/Music';

import { createClient } from 'contentful';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const music = await client.getEntries({
    content_type: 'music',
  });
  return {
    props: {
      music: music.items,
    },
  };
};

const MusicPage = (props) => {
  const { music } = props;

  return <Music music={music} />;
};

export default MusicPage;
