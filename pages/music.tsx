import { createClient } from 'contentful';
import Music from '../src/components/Music';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
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
