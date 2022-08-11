import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  dot: {
    width: '48px',
    margin: '16px 2px !important',
    borderRadius: '10px !important',
    '& > svg': {
      fontSize: '2.3rem',
    },
  },
  paper: {
    padding: '16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));