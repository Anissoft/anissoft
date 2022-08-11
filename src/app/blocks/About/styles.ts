import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& b,& strong': {
      fontWeight: theme.palette.type === 'dark' ? '600' : '600',
    },
    '&:not(:last-child)': {
      marginBottom: '1.5em'
    }
  },
}));