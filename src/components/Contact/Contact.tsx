import React from "react";

import useStyles from "./Contact.styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <div>Management / Bookings</div>
      <div className={classes.contactLink}>Riccardo Primavera</div>

      {/* TODO: add dells contact too and do it via contentful */}
    </div>
  );
};

export default Contact;
