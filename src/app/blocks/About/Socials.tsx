import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';

import { useStyles } from './styles';

export function Socials() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="caption" component="p">Contact me</Typography>
      <Typography component="div" className={classes.root}>
        <Grid container spacing={2}>
          <Grid item><Link color="textPrimary" href="mailto:anissoft@gmail.com"><strong>Email</strong></Link></Grid>
          <Grid item><Link color="textPrimary" href="https://github.com/Anissoft"><strong>Github</strong></Link></Grid>
          <Grid item><Link color="textPrimary" href="https://t.me/anissoft"><strong>Telegram</strong></Link></Grid>
          <Grid item><Link color="textPrimary" href="https://www.instagram.com/anissoftkun/"><strong>Instagram</strong></Link></Grid>
        </Grid>
      </Typography>
    </>
  );
}