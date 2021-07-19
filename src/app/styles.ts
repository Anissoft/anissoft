import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    // padding: '16px',
    // overflowY: '',
    position: 'relative',
    minWidth: '330px',
    maxWidth: theme.breakpoints.values.lg,
  },
  content: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
    },
  },
  roundImage: {
    width: '100%',
    borderRadius: '50%',
    display: 'block',
  },
  toolbar: {
    width: '100%',
    padding: '16px 0px',
  },
}));