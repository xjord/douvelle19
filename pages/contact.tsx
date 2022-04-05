import { createClient } from 'contentful';

import Contact from '../src/components/Contact';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const contacts = await client.getEntries({
    content_type: 'contact',
  });

  return {
    props: {
      contacts: contacts.items,
    },
  };
};

const ContactsPage = (props) => {
  const { contacts } = props;

  return <Contact contacts={contacts} />;
};

export default ContactsPage;