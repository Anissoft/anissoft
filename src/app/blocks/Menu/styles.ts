import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  enabled: {

  },
  disabled: {
    color: theme.palette.text.disabled,
    '&:hover': {
      color: theme.palette.text.primary
    }
  }
}));