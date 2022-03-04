import React from 'react';

import { openEmail } from '../../utils/helpers';
import Button from '../Button';
import useStyles from './Contact.styles';

const Contact = ({ contacts }) => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      {contacts.map((contact, index) => {
        const { title, name, emailAddress } = contact?.fields;

        return (
          <div key={index} className={classes.contactWrapper}>
            <div className={classes.contactInfo}>
              <div className={classes.contactTitle}>{title}</div>
              <div className={classes.contactLink} onClick={() => openEmail(emailAddress)}>
                {name}
              </div>
            </div>
            <div className={classes.contactButtonWrapper}>
              <Button>Email</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
