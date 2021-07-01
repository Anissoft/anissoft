import React from 'react';
import { useLocalStorage, useQueryParameter } from '@anissoft/react-hooks';

export enum Locale {
  ru = 'ru',
  en = 'en',
}
const defaultLocale = Locale.ru;

export function useLocale() {
  const [localeInStorage, setlocaleInStorage] = useLocalStorage('locale', defaultLocale);
  const [locale, setlocale] = useQueryParameter('lang');

  const changeLocale = React.useCallback((lang: Locale) => {
    if (Object.values(Locale).includes(lang as Locale)) {
      setlocale(lang);
      setlocaleInStorage(lang);
    } else {
      throw (`Unsupported locale ${lang}`);
    }
  }, []);

  React.useEffect(() => {
    if (!locale || !Object.values(Locale).includes(locale as Locale)) {
      changeLocale((localeInStorage || defaultLocale) as Locale);
    } else if (locale !== localeInStorage) {
      setlocaleInStorage(locale);
    }
  }, [locale, localeInStorage, changeLocale]);

  return [locale];
}