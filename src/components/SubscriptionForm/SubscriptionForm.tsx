import React, { useMemo, useState } from 'react';
import InnerHTML from 'dangerously-set-html-content';

import Button from '../Button';
import TextField from '../TextField';
import { requiredValidation, emailValidation, nameValidation, phoneValidation } from '../../utils/validation';
import { useFormValidation } from '../../utils/helpers';
import { FormValidationInput } from '../../models/index';
import { FormWrapper, FormTitle, Form, FormMessage } from './SubscriptionForm.styles';

interface SubscriptionFormProps {
  status?: 'sending' | 'success';
  message?: string;
  onValidated?: ({}) => void;
}

const SubscriptionForm = (props: SubscriptionFormProps) => {
  const { status, message, onValidated } = props;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const isLoading = useMemo(() => status === 'sending', [status]);
  const subscribed = useMemo(() => status === 'success', [status]);

  const formValidation = useFormValidation(SUBSCRIPTION_VALIDATION(email, firstName, lastName, phoneNumber));

  const submitForm = (email, firstName, lastName, phoneNumber) => {
    if (!formValidation.validate()) return;

    onValidated({
      EMAIL: email,
      MERGE1: firstName,
      MERGE2: lastName,
      MERGE4: phoneNumber,
    });
  };

  return (
    <FormWrapper>
      <FormTitle>Sign up for the latest news on releases, edits, tour dates and more.</FormTitle>
      <Form>
        <TextField
          label="Email address"
          placeholder="Email address here..."
          onChange={setEmail}
          value={email}
          errorMessage={formValidation.email}
        />
        <TextField
          label="First name"
          placeholder="First name here..."
          onChange={setFirstName}
          type="text"
          value={firstName}
          errorMessage={formValidation.firstName}
        />
        <TextField
          label="Last name"
          placeholder="Last name here..."
          onChange={setLastName}
          type="text"
          value={lastName}
          errorMessage={formValidation.lastName}
        />
        <TextField
          label="Phone number"
          placeholder="Phone number here..."
          onChange={setPhoneNumber}
          type="text"
          value={phoneNumber}
          errorMessage={formValidation.phoneNumber}
        />
      </Form>
      <div>
        <Button
          isLoading={isLoading}
          width={222}
          disabled={subscribed}
          onClick={() => submitForm(email, firstName, lastName, phoneNumber)}
        >
          {subscribed ? 'Subscribed!' : 'Subscribe'}
        </Button>
      </div>
      <FormMessage>
        <InnerHTML html={subscribed ? '' : message} />
      </FormMessage>
    </FormWrapper>
  );
};

export default SubscriptionForm;

const SUBSCRIPTION_VALIDATION = (
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
): FormValidationInput[] => [
  {
    key: 'email',
    value: email,
    validations: [requiredValidation, emailValidation],
  },
  {
    key: 'firstName',
    value: firstName,
    validations: [requiredValidation, nameValidation],
  },
  {
    key: 'lastName',
    value: lastName,
    validations: [requiredValidation, nameValidation],
  },
  {
    key: 'phoneNumber',
    value: phoneNumber,
    validations: [requiredValidation, phoneValidation],
  },
];
