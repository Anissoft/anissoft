import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Switch, Case, Default } from '@anissoft/react-conditions'

import { Locale, useLocale } from '../../../hooks/useLocale';
import { useStyles } from './styles';

export function Intro() {
  const [locale] = useLocale();
  const classes = useStyles()
  const workExperienceInYears = React.useMemo(() => {
    return Math.floor(((+new Date()) - (+new Date('2015-06-01'))) / 31536000000);
  }, []);
  const ruYears = React.useMemo(() => {

  }, [workExperienceInYears]);

  return (
    <Typography component="p" className={classes.root}>
      <Switch>
        <Case condition={locale === Locale.ru}>
          Привет! Меня зовут Алексей, я <strong>фронтенд разработчик</strong> из России с опытом коммерческой разработки больше <strong>{workExperienceInYears} лет</strong>.
          Я специализируюсь на создании удобных и практичных пользовательских интерфейсов и веб-приложений с помощью <strong>NodeJS, React</strong> и <strong>дизайн систем</strong>.
        </Case>
        <Default >
          Hello I'm Alexey, a <strong>frontend developer</strong> with more than <strong>{workExperienceInYears} years</strong> of experience in web development.
          My specialization is the creation of interactive and user-friendly interfaces and web applications using <strong>NodeJS, React</strong> and <strong>Design Systems</strong>.
        </Default>
      </Switch>
    </Typography>
  );
}
