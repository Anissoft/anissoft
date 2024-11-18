import React from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Avatar } from './blocks/Avatar';
import { Menu } from './blocks/Menu/Menu';
import { Intro, Socials } from './blocks/About';

import { useStyles } from './styles';
import { createTheme } from './theme';
import { useLocale } from '../hooks/useLocale';
import { useThemeType } from '../hooks/useThemeType';

export function Root() {
  const [themeType] = useThemeType();
  useLocale();

  const theme = React.useMemo(
    () => responsiveFontSizes(createTheme({ themeType }), { factor: 4 }),
    [themeType]
  );
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.root}>
        <Toolbar variant="dense" className={classes.menu} component="header">
          <Menu />
        </Toolbar>
        <Grid
          item
          container
          justifyContent={'center'}
          spacing={8}
          className={classes.content}
        >
          <Grid
            item
            xs={10}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className={classes.avatar}
          >
            <Avatar />
          </Grid>
          <Grid item xs={12} className={classes.intro}>
            <Intro />
          </Grid>
          <Grid item xs={12} className={classes.socials}>
            <Socials />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
