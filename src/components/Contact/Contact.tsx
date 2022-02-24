import React from 'react';

import { openEmail } from '../../utils/helpers';
import useStyles from './Contact.styles';

const Contact = ({ contacts }) => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      {contacts.map((contact, index) => {
        const { title, name, emailAddress } = contact?.fields;

        return (
          <div key={index} className={classes.contactInfo}>
            <div>{title}</div>
            <div className={classes.contactLink} onClick={() => openEmail(emailAddress)}>
              {name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
