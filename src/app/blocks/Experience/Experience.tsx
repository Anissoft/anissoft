import React, { useCallback, useMemo, useState } from 'react';
import {
  responsiveFontSizes,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { Case, Default, Switch } from '@anissoft/react-conditions';

import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import ForumIcon from '@material-ui/icons/Forum';
import Paper from '@material-ui/core/Paper';

import { Locale, useLocale } from '../../../hooks/useLocale';
import { useStyles } from './styles';
import { useUpBreakpoint } from '../../../hooks/useBreakpoint';

// @ts-expect-error
import ringcentral_icon from 'url:./../../../../public/assets/images/ringcentral_icon.png';
// @ts-expect-error
import tinkoff_icon from 'url:./../../../../public/assets/images/tinkoff_logo.png';
// @ts-expect-error
import kontur_icon from 'url:./../../../../public/assets/images/kontur_icon.png';
// @ts-expect-error
import besttoolbars_logo from 'url:./../../../../public/assets/images/besttoolbars_logo.jpeg';

export function Experience() {
  const [locale] = useLocale();
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  const getTimelineTheme = useCallback(
    (theme: Theme): Theme => responsiveFontSizes(theme, { factor: 4 }),
    []
  );
  const isWideEnough = useUpBreakpoint('sm');

  const data = useMemo(
    () => [
      {
        company: 'DINS',
        from: new Date('16 November 2021 00:00:00 GMT'),
        until: new Date(),
        icon: ringcentral_icon,
        title:
          locale === Locale.ru
            ? 'Старший инженер-разработчик'
            : 'Senior Software Engineer',
        spec: 'Frontend',
        description: (
          <Switch>
            <Case condition={locale === Locale.ru}>
              <p>
                Проектирование и разработка веб приложения для коммуникаций,
                включая голосовые и видео звонки, чаты (UCaaS-платформа). Наше
                решение успешно заменило предыдущую интеграцию платформы со
                сторонним решением от Zoom.
              </p>
            </Case>
            <Default>
              <p>
                Our team designed and implemented web frontend application for
                Ringcentral&apos;s UCaaS-platform that succesfuly replaced
                previous integration with Zoom.
              </p>
            </Default>
          </Switch>
        ),
      },
      {
        company: locale === Locale.ru ? 'Тинькофф' : 'Tinkoff',
        from: new Date('13 January 2021 00:00:00 GMT'),
        until: new Date('1 December 2021 00:00:00 GMT'),
        icon: tinkoff_icon,
        spec: 'Frontend',
        title:
          locale === Locale.ru ? 'Инженер-разработчик' : 'Software Engineer',
        description: (
          <Switch>
            <Case condition={locale === Locale.ru}>
              <p>
                Работал в отделе аналитической платформы, в команде
                разрабатывающей онлайн-IDE для аналитиков банка и ETL
                разработчиков.
              </p>
              <p>
                Главным вызовом была оптимизация производительности приложения
                при рендере комплексных ноутбуков, c большим количеством
                редакторов кода, табличных и графических представлений данных.
              </p>
            </Case>
            <Default>
              <p>
                Was part of the DWH department. Developed frontend of
                collaborative online-IDE for bank analysts and ETL developers.
              </p>
              <p>
                The main challenge was to optimize the performance of the
                application when rendering complex notebooks, with a large
                amount of code editors, tables and graphical data
                representations.
              </p>
            </Default>
          </Switch>
        ),
      },
      {
        company: locale === Locale.ru ? 'СКБ Контур' : 'SKB Kontur',
        from: new Date('1 December 2018 00:00:00 GMT'),
        until: new Date('1 January 2021 00:00:00 GMT'),
        icon: kontur_icon,
        spec: 'Full-stack',
        title:
          locale === Locale.ru ? 'Инженер-разработчик' : 'Software Engineer',
        description: (
          <Switch>
            <Case condition={locale === Locale.ru}>
              <p>
                Участвовал в разработке фронтенда нескольких продуктов и
                сервисов Контура (глобальная система мониторинга и менеджмента
                пользовательских данных, личный кабинет пользователя, сервис для
                работы с исполнительными производствами &quot;Право&quot; и
                другие).
              </p>
              <p>
                Разрабатывал и поддерживал внутренние инструменты и библиотеки
                для разработки на NodeJS.
              </p>
            </Case>
            <Default>
              <p>
                Participated in the development of the front-end of several
                products and services of Kontur (a global system for monitoring
                and managing user data, a personal profile application, a
                service for management of enforcement proceedings
                &quot;Kontur.Pravo&quot; and others).
              </p>
              <p>
                Developed and maintained internal tools and libraries for NodeJS
                development.
              </p>
            </Default>
          </Switch>
        ),
      },
      {
        company: 'BestToolBars',
        from: new Date('1 June 2016 00:00:00 GMT'),
        until: new Date('1 December 2018 00:00:00 GMT'),
        icon: besttoolbars_logo,
        spec: 'Full-stack',
        title:
          locale === Locale.ru
            ? 'Ведущий инженер-разработчик'
            : 'Lead Software Engineer',
        description: (
          <Switch>
            <Case condition={locale === Locale.ru}>
              <p>
                Вел разработку большого количество проектов связанных с
                веб-приложениями и браузерными расширениями для кэшбэк и купон
                сервисов, VPN, антивирусов и других сфер деятельности.
              </p>
              <p>
                Разрабатывал архитекутру внутреннего решения для разработки
                кроссс-браузерных расширений, что позволило использовать одну
                кодовую базу для всех браузеров.
              </p>
            </Case>
            <Default>
              <p>
                Led the development of a large amount of projects which includes
                web applications and browser extensions for cashback and coupon
                services, VPNs, antiviruses and etc.
              </p>
              <p>
                Developed the architecture of an internal framework for the
                development of cross-browser extensions, which made possible to
                use single codebase for all browsers.
              </p>
            </Default>
          </Switch>
        ),
      },
      {
        company: locale === Locale.ru ? 'СМС Центр' : 'SMS Center',
        from: new Date('1 August 2015 00:00:00 GMT'),
        until: new Date('1 August 2016 00:00:00 GMT'),
        icon: <ForumIcon fontSize="small" />,
        spec: 'Backend',
        title:
          locale === Locale.ru
            ? 'Младший инженер-разработчик'
            : 'Junior Software Engineer',
        description: (
          <Switch>
            <Case condition={locale === Locale.ru}>
              <p>
                Поектировал и разрабатывал hardware систему для рассылки
                сообщений через мессенджеры. Участвовал в разработке системы
                мониторинга удаленных серверов.
              </p>
            </Case>
            <Default>
              <p>
                Designed and developed a hardware system for sending messages
                via Whatsapp. Participated in the development of a monitoring
                system for remote servers.
              </p>
            </Default>
          </Switch>
        ),
      },
    ],
    [locale]
  );

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            {locale === Locale.ru ? 'Опыт' : 'Experience'}
            {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </Button>
        </Grid>
        <Collapse
          in={!collapsed}
          component={Grid}
          classes={{
            wrapper: classes.container,
          }}
          {...{ item: true, container: true }}
        >
          <ThemeProvider theme={getTimelineTheme}>
            <Timeline align="left" className={classes.root}>
              {data.map((item, index) => (
                <TimelineItem key={`${index}`}>
                  {isWideEnough && (
                    <TimelineOppositeContent>
                      <Typography variant="subtitle2" color="textSecondary">
                        {item.company}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {item.from.toLocaleDateString(locale, {
                          month: 'short',
                          year: '2-digit',
                        })}
                        {' - '}
                        {item.until.toLocaleDateString(locale, {
                          month: 'short',
                          year: '2-digit',
                        })}
                      </Typography>
                    </TimelineOppositeContent>
                  )}
                  <TimelineSeparator>
                    {typeof item.icon === 'string' ? (
                      <img
                        className={classes.dot}
                        src={item.icon}
                        alt={'logo'}
                      />
                    ) : (
                      <TimelineDot className={classes.dot}>
                        {item.icon}
                      </TimelineDot>
                    )}
                    {index !== data.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent classes={{ root: classes.item }}>
                    <Paper elevation={3} className={classes.paper}>
                      {!isWideEnough && (
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="baseline"
                        >
                          <Grid item>
                            <Typography
                              variant="h5"
                              component="h5"
                              gutterBottom
                            >
                              <b>{item.company}</b>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption" gutterBottom>
                              {item.from.toLocaleDateString(locale, {
                                month: 'short',
                                year: '2-digit',
                              })}
                              {' - '}
                              {item.until.toLocaleDateString(locale, {
                                month: 'short',
                                year: '2-digit',
                              })}
                            </Typography>
                          </Grid>
                        </Grid>
                      )}
                      <Typography variant="h6" component="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography component="div">
                        {item.description}
                      </Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
            <Grid item container justifyContent="center">
              <Grid item>
                <Button onClick={() => setCollapsed(true)}>
                  <ExpandLessIcon fontSize="small" />
                </Button>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Collapse>
      </Grid>
    </>
  );
}
