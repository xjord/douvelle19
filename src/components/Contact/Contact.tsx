import React from 'react';

import { openEmail } from '../../utils/helpers';
import Button from '../Button';
import {
  ContactWrapper,
  ContactItem,
  ContactInfo,
  ContactTitle,
  ContactLink,
  ContactButtonWrapper,
} from './Contact.styles';

const Contact = ({ contacts }) => {
  return (
    <ContactWrapper>
      {contacts.map((contact, index) => {
        const { title, name, emailAddress } = contact?.fields;

        return (
          <ContactItem key={index}>
            <ContactInfo>
              <ContactTitle>{title}</ContactTitle>
              <ContactLink>{name}</ContactLink>
            </ContactInfo>
            <ContactButtonWrapper>
              <Button onClick={() => openEmail(emailAddress)}>Email</Button>
            </ContactButtonWrapper>
          </ContactItem>
        );
      })}
    </ContactWrapper>
  );
};

export default Contact;
