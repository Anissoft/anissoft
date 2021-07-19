import React from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Avatar } from './blocks/Avatar';
import { Menu } from './blocks/Menu/Menu';
import { Intro, Experience, Socials } from './blocks/About';

import { useStyles } from './styles';
import { createTheme } from './theme';
import { useLocale } from '../hooks/useLocale';
import { useThemeType } from '../hooks/useThemeType';

export function Root() {
  const classes = useStyles();
  const [themeType] = useThemeType();
  useLocale();

  const theme = React.useMemo(() => createTheme({ themeType }), [themeType]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.root}>
        <Toolbar variant="dense" className={classes.toolbar} component="header">
          <Menu />
        </Toolbar>
        <Grid item container justify={'center'} spacing={8} className={classes.content}>
          <Grid item xs={10} sm={7} md={6} lg={4} xl={2}>
            <Avatar />
          </Grid>
          <Grid item xs={12}>
            <Intro />
          </Grid>
          <Grid item xs={12}>
            <Experience />
          </Grid>
          <Grid item xs={12}>
            <Socials />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}