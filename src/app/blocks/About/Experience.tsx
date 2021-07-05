import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Switch, Case, Default } from '@anissoft/react-conditions'

import { Locale, useLocale } from '../../../hooks/useLocale';
import { useStyles } from './styles';

export function Experience() {
  const [locale] = useLocale();
  const classes = useStyles()

  return (
    <Typography component="p" className={classes.root}>
      <Switch>
        <Case condition={locale === Locale.ru}>
          RuText
        </Case>
        <Default >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Default>
      </Switch>
    </Typography>
  );
}