import { useEffect, useRef, useState } from 'react';
import { parseISO, isToday, isTomorrow } from 'date-fns';
import { ShortMonths, ShortDays, FormValidationInput, ValidationObject } from '../models/index';

export const getDateString = (date: string, showFullDate?: boolean) => {
  const parsedDate = parseISO(date);
  if (!showFullDate) {
    if (isToday(parsedDate)) return 'Today';
    if (isTomorrow(parsedDate)) return 'Tomorrow';
  }

  return `${ShortDays[parsedDate.getDay()]} ${parsedDate.getDate()} ${ShortMonths[parsedDate.getMonth()]}`;
};

export const openLink = (link: string) => window.open(link, '_self');

export const openInTab = (link: string) => window.open(link);

export const openEmail = (email: string) => window.open(`mailto:${email}`);

// Form validation
export const useFormValidation = (inputs: FormValidationInput[]) => {
  const [validationObject, setValidationObject] = useState(
    inputs.reduce((acc, val) => {
      acc[val.key] = '';
      return acc;
    }, {} as Record<string, string>),
  );

  const prev = usePrevious(
    inputs.reduce((acc, i) => {
      acc[i.key] = i.value;
      return acc;
    }, {} as Record<string, string>),
  );

  useEffectBefore(
    () => {
      if (!validationObject) return;
      inputs.forEach((i) => {
        // @ts-ignore
        if (i.value !== prev[i.key]) validationObject[i.key] = '';
      });
    },
    inputs.map((i) => i.value),
  );

  const validate = () => {
    let valid = true;
    if (!validationObject) return valid;
    inputs.forEach((i) => {
      for (const validation of i.validations) {
        if (
          (validation.test instanceof RegExp && !validation.test.test(i.value)) ||
          (!(validation.test instanceof RegExp) && !validation.test(i.value))
        ) {
          validationObject[i.key] = validation.message;
          valid = false;
          break;
        }
      }
    });
    setValidationObject({ ...validationObject });
    return valid;
  };

  const setValidation = (key: string, value: string) => {
    const tmp: Record<string, string> = {};
    tmp[key] = value;
    setValidationObject((v) => ({ ...v, ...tmp }));
  };

  return { ...validationObject, validate, setValidation } as ValidationObject;
};

const useEffectBefore = (callback: Function, deps?: ReadonlyArray<any>) => {
  const prevDeps = useRef<ReadonlyArray<any> | undefined>(undefined);
  useEffect(() => {
    prevDeps.current = deps;
  });

  const shouldCall = () => {
    if (!deps) return true;
    if (!prevDeps.current) return false;

    for (let i = 0; i < deps.length; i += 1) {
      const dep = deps[i];
      if (dep !== (prevDeps.current as ReadonlyArray<any>)[i]) {
        return true;
      }
    }
    return false;
  };
  if (shouldCall()) {
    callback();
  }
};

const usePrevious = <T>(value: T | undefined, deps?: ReadonlyArray<any>): T | undefined => {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, deps);
  return ref.current;
};

export const fetchContentfulData = async () => {
  //TODO: move link to ENV variable
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENV_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  ).then((response) =>
    response.json().then((data) => {
      return data.items;
    }),
  );

  const socials = res.filter((item) => item.sys.contentType.sys.id === 'socialLink');
  const logoData = res.filter((item) => item.sys.contentType.sys.id === 'logo');
  const logoId = logoData[0].fields.logo.sys.id;

  const logo = await fetchContentfulAssest(logoId);

  return {
    socials,
    logo,
  };
};

const fetchContentfulAssest = async (assetId: string) => {
  return await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENV_ID}/assets/${assetId}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  ).then((response) =>
    response.json().then((data) => {
      return data;
    }),
  );
};
