import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  item: {
    padding: '6px 16px',
    [theme.breakpoints.down('sm')]: {
      padding: '6px 10px',
    },
  },
  dot: {
    width: '48px',
    margin: '16px 2px !important',
    borderRadius: '10px !important',
    '& > svg': {
      fontSize: '2.3rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '24px',
      margin: '24px 2px 16px !important',
      borderRadius: '3px !important',
      '& > svg': {
        fontSize: '0.75rem',
      },
    },
  },
  paper: {
    padding: '16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));