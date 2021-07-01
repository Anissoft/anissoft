import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: '64px 16px',
    maxWidth: '100vw',
    // background: '#131419',
    minWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.up('md')]: {
      // maxHeight: '100vh',
      overflowY: 'auto',
      padding: '64px 28px',
    },
  },
  roundImage: {
    width: '100%',
    borderRadius: '50%',
    display: 'block',
  },
}));