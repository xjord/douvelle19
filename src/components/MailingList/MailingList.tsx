import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import SubscriptionForm from '../SubscriptionForm';
import { MailingListWrapper } from './MailingList.styles';

const MailingList = () => {
  const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

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
