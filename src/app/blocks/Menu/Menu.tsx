import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import { useThemeType } from '../../../hooks/useThemeType';
import { Locale, useLocale } from '../../../hooks/useLocale';
import { useStyles } from './styles';


export function Menu() {
  const [locale, setLocale] = useLocale();
  const [themeType, setThemeType] = useThemeType();
  const classes = useStyles();

  return (
    <Grid container direction="row" spacing={1} justifyContent="space-between" alignItems="center">
      <Grid item>
        <Button
          aria-label="enable light theme"
          onClick={() => setThemeType('light')}
          size="small"
          variant="text"
          className={clsx({ [classes.enabled]: themeType === 'light', [classes.disabled]: themeType !== 'light' })}
        >
          <WbSunnyIcon fontSize="small" />
        </Button>
        {` | `}
        <Button
          aria-label="enable dark theme"
          onClick={() => setThemeType('dark')}
          size="small"
          variant="text"
          className={clsx({ [classes.enabled]: themeType === 'dark', [classes.disabled]: themeType !== 'dark' })}>
          <Brightness2Icon fontSize="small" />
        </Button>
      </Grid>
      <Grid item>
        <Button
          aria-label="switch language to eng"
          onClick={() => setLocale(Locale.en)}
          size="small"
          variant="text"
          className={clsx({ [classes.enabled]: locale === Locale.en, [classes.disabled]: locale !== Locale.en })}
        >
          EN
        </Button>
        {` | `}
        <Button
          aria-label="switch language to ru"
          onClick={() => setLocale(Locale.ru)}
          size="small"
          variant="text"
          className={clsx({ [classes.enabled]: locale === Locale.ru, [classes.disabled]: locale !== Locale.ru })}>
          RU
        </Button>
      </Grid>
    </Grid>
  )
}