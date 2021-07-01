import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './styles';
import { Avatar } from './blocks/Avatar';
import { Intro, Experience, Socials } from './blocks/About';

export function Root() {
  const classes = useStyles();

  return (
    <Grid container justify={'center'} className={classes.root} spacing={8}>
      <Grid item xs={10} sm={7} md={6} lg={4} xl={2}>
        <Avatar />
      </Grid>
      <Grid item>
        <Intro />
      </Grid>
      <Grid item>
        <Experience />
      </Grid>
      <Grid item>
        <Socials />
      </Grid>
    </Grid>
  );
}