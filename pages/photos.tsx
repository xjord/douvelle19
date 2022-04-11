import { createClient } from 'contentful';

import Photos from '../src/components/Photos';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const socials = await client.getEntries({
    content_type: 'socialLink',
  });

  return {
    props: {
      instagramLink: socials.items.filter((social) => social.fields.type === 'Instagram')[0].fields.link,
    },
  };
};

const PhotosPage = ({ instagramLink }) => {
  return <Photos followLink={instagramLink} />;
};

export default PhotosPage;
