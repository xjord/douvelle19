import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import SubscriptionForm from '../SubscriptionForm';
import { MailingListWrapper } from './MailingList.styles';

const MailingList = () => {
  const mailchimpUrl =
    'https://Douvelle19.us14.list-manage.com/subscribe/post?u=b60265bc4b7cc8aa648ee2bfc&amp;id=1ca969b5f0';
  // process.env.MAILCHIMP_URL;

  return (
    <MailingListWrapper>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <SubscriptionForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />
        )}
      />
    </MailingListWrapper>
  );
};

export default MailingList;
