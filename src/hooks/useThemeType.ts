import React from 'react';
import { useLocalStorage } from '@anissoft/react-hooks';

export function useThemeType() {
  const systemSetting = window.matchMedia?.(
    '(prefers-color-scheme: dark)'
  )?.matches;
  const [type, setType] = useLocalStorage(
    '__theme_type',
    systemSetting ? 'dark' : 'light'
  );

  React.useEffect(() => {
    if (type !== 'dark' && type !== 'light') {
      setType(systemSetting ? 'dark' : 'light');
    }
  }, [type]);

  return [type, setType] as [
    'dark' | 'light',
    (type: 'dark' | 'light') => void
  ];
}
