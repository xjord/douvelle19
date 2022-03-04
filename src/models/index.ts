import { Sys, Metadata } from 'contentful';

// TODO: rename
export interface ITourDates {
  banner: Response[];
}

export interface Response {
  sys: Sys;
  fields: Field;
  metadata: Metadata;
  toPlainObject(): object;
}

export interface Field {
  date: string;
  location: string;
  ticketLink: any;
  venue: string;
}

export enum ShortMonths {
  'Jan' = 0,
  'Feb' = 1,
  'Mar' = 2,
  'Apr' = 3,
  'May' = 4,
  'Jun' = 5,
  'Jul' = 6,
  'Aug' = 7,
  'Sep' = 8,
  'Oct' = 9,
  'Nov' = 10,
  'Dec' = 11,
}

export enum ShortDays {
  'Sun' = 0,
  'Mon' = 1,
  'Tue' = 2,
  'Wed' = 3,
  'Thur' = 4,
  'Fri' = 5,
  'Sat' = 6,
}

export enum LongMonths {
  'January' = 0,
  'February' = 1,
  'March' = 2,
  'April' = 3,
  'May' = 4,
  'June' = 5,
  'July' = 6,
  'August' = 7,
  'September' = 8,
  'October' = 9,
  'November' = 10,
  'December' = 11,
}

export enum LongDays {
  'Sunday' = 0,
  'Monday' = 1,
  'Tuesday' = 2,
  'Wednesday' = 3,
  'Thursday' = 4,
  'Friday' = 5,
  'Saturday' = 6,
}

export interface FormValidation {
  message: string;
  test: ((value: string) => boolean) | RegExp;
}

export interface FormValidationInput {
  key: string;
  value: string;
  validations: FormValidation[];
}

export interface ValidationObject {
  [x: string]: any;
  validate: () => boolean;
  setValidation: (email: string, value: string) => void;
}
