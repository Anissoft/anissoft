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
    <>
      <Typography component="p" className={classes.root}>
        <Switch>
          <Case condition={locale === Locale.ru}>
            Привет! Меня зовут Алексей, я <strong>фронтенд разработчик</strong> из России с опытом коммерческой разработки больше <strong>{workExperienceInYears} лет</strong>.
            Я специализируюсь на создании удобных и практичных пользовательских интерфейсов и веб-приложений с помощью <strong>Typescript, React, NodeJS</strong> и <strong>дизайн систем</strong>.
          </Case>
          <Default >
            Hello I'm Alexey, a <strong>frontend developer</strong> with more than <strong>{workExperienceInYears} years</strong> of experience in web development.
            My specialization is the creation of interactive and user-friendly interfaces and web applications using <strong>Typescript, React, NodeJS</strong> and <strong>Design Systems</strong>.
          </Default>
        </Switch>
      </Typography>
      <Typography component="p" className={classes.root}>
        <Switch>
          <Case condition={locale === Locale.ru}>
            Я работал над <strong>инфраструктурными и продуктовыми</strong> веб-сервисами и приложениями
            в команде бок о бок с дизайнерами, проектировщиками, аналитиками и другими специалистами;
            <strong> Вел и разрабатывал</strong> проекты с нуля и забирал на поддержку уже существующие;
            Принимал непосредственное участие в <strong>формировании процесов</strong> разработки в командах;
            Был <strong>наставником</strong> для стажеров и молодых разработчиков в командах, а так же <strong>преподавал</strong> студентам курсы front-end разработки.
          </Case>
          <Default >
            As a web developer I worked on <strong>internal and consumer</strong> web services and applications in teams,
            side by side with designers, engineers, analysts and other specialists;
            <strong> Led and developed</strong> projects from scratch and took existing ones for support and improvements;
            Used to be involved in the <strong>development of the team processes</strong>;
            Was a <strong>mentor</strong> for interns and new developers and also taught <strong>front-end courses</strong>.
          </Default>
        </Switch>
      </Typography>
    </>
  );
}
