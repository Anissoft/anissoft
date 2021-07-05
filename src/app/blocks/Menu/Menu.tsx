import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import React from 'react';

import { Locale, useLocale } from '../../../hooks/useLocale';
import { useStyles } from './styles';


export function Menu() {
  const [locale, setLocale] = useLocale();
  const classes = useStyles();

  return (
    <Grid container direction="row-reverse">
      <Grid item>
        <Button
          onClick={() => setLocale(Locale.en)}
          size="small"
          variant="text"
          className={clsx({ [classes.enabled]: locale === Locale.en, [classes.disabled]: locale !== Locale.en })}
        >
          EN
        </Button>
        {` | `}
        <Button
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