import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { useStyles } from './styles';
import { Avatar } from './blocks/Avatar';
import { Intro, Experience, Socials } from './blocks/About';
import { useLocale } from '../hooks/useLocale';
import { Menu } from './blocks/Menu/Menu';

export function Root() {
  const classes = useStyles();
  useLocale();

  return (
    <>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Menu />
      </Toolbar>
      <Grid container justify={'center'} className={classes.root} spacing={8}>
        <Grid item xs={10} sm={7} md={6} lg={3} xl={2}>
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
    </>
  );
}