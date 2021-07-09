import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    // padding: '16px',
    // overflowY: '',
    minWidth: theme.breakpoints.values.sm,
    maxWidth: theme.breakpoints.values.lg,
  },
  content: {
    maxWidth: '100%',
  },
  roundImage: {
    width: '100%',
    borderRadius: '50%',
    display: 'block',
  },
  toolbar: {
    padding: '16px 0px'
  },
}));