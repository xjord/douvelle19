import React, { useMemo, useState } from "react";

import Button from "../Button";
import TextField from "../TextField";
import useStyles from "./SubscriptionForm.styles";

const SubscriptionForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const isLoading = useMemo(() => status === "sending", [status]);
  const subscribed = useMemo(() => status === "success", [status]);

  //   message

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      phoneNumber &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
        MERGE4: phoneNumber,
      });
  };

  const classes = useStyles();

  return (
    <form className={classes.formWrapper} onSubmit={(e) => handleSubmit(e)}>
      <h3 className={classes.formTitle}>
        Sign up for the latest news on releases, edits, tour dates and more.
      </h3>
      <div className={classes.form}>
        <TextField
          label="Email Address"
          onChange={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
        />

        <TextField
          label="First Name"
          onChange={setFirstName}
          type="text"
          value={firstName}
          placeholder="Jane"
        />

        <TextField
          label="Last Name"
          onChange={setLastName}
          type="text"
          value={lastName}
          placeholder="Doe"
          isRequired
        />

        <TextField
          label="Phone Number"
          onChange={setPhoneNumber}
          type="text"
          value={phoneNumber}
          placeholder="phone number"
          isRequired
        />
      </div>

      {/* <Button isLoading /> */}
      <input
        label="subscribe"
        type="submit"
        formValues={[email, firstName, lastName, phoneNumber]}
      />
    </form>
  );
};

export default SubscriptionForm;
