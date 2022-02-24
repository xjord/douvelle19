import React from "react";

import useStyles from "./Contact.styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <div className={classes.contactInfo}>
        <div>Management / Bookings</div>
        <div className={classes.contactLink}>Riccardo Primavera</div>
      </div>

      <div className={classes.contactInfo}>
        <div>Other</div>
        <div className={classes.contactLink}>Douvelle19</div>
      </div>
    </div>
  );
};

export default Contact;
