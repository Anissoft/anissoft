import React from 'react';
import { useLocalStorage, useQueryParameter } from '@anissoft/react-hooks';

export enum Locale {
  ru = 'ru',
  en = 'en',
}
const defaultLocale = Locale.en;

export function useLocale() {
  const [localeInStorage, setlocaleInStorage] = useLocalStorage('locale', defaultLocale);
  const [locale, setlocale] = useQueryParameter('lang', localeInStorage);

  const changeLocale = React.useCallback((lang: Locale) => {
    if (Object.values(Locale).includes(lang as Locale)) {
      setlocale(lang);
    } else {
      setlocale(defaultLocale);
      throw (`Unsupported locale ${lang}`);
    }
  }, []);

  React.useEffect(() => {
    if (localeInStorage !== locale) {
      setlocaleInStorage(locale as string)
    }
  }, [locale, localeInStorage]);

  return [locale, changeLocale] as [Locale, (lang: Locale) => void];
}