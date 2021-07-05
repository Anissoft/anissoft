import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& b,& strong': {
      fontWeight: '500'
    }
  },
}));