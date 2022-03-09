import React from 'react';

import { openEmail } from '../../utils/helpers';
import Button from '../Button';
// import useStyles from './Contact.styles';

const Contact = ({ contacts }) => {
  const classes = {};

  return (
    <div className={classes.contact}>
      {contacts.map((contact, index) => {
        const { title, name, emailAddress } = contact?.fields;

        return (
          <div key={index} className={classes.contactWrapper}>
            <div className={classes.contactInfo}>
              <div className={classes.contactTitle}>{title}</div>
              <div className={classes.contactLink}>{name}</div>
            </div>
            <div className={classes.contactButtonWrapper}>
              <Button onClick={() => openEmail(emailAddress)}>Email</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
