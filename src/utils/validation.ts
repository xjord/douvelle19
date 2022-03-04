import { FormValidation } from '_models/index';

// Validation regex
export const requiredRegex = new RegExp(/^.{1,}$/);
export const lengthRegex = (length: number) => new RegExp(`^.{${length},}$`);
export const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\s]{2,}))$/,
);
export const phoneNumberRegex = new RegExp(
  /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/,
);

// Form validation
export const requiredValidation: FormValidation = {
  test: requiredRegex,
  message: 'Field required.',
};

export const emailValidation: FormValidation = {
  test: emailRegex,
  message: 'Valid email address required.',
};

export const nameValidation: FormValidation = {
  test: lengthRegex(2),
  message: 'Name has to be at least 2 characters long.',
};

export const phoneValidation: FormValidation = {
  test: phoneNumberRegex,
  message: 'Invalid phone number.',
};
