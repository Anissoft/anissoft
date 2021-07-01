import { createMuiTheme } from '@material-ui/core/styles';
import { grey, lime } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat,sans-serif;',
    fontSize: 32
  },
  palette: {
    background: {
      default: '#fafafa',
    },
    secondary: {
      main: grey[50],
    },
    primary: {
      main: lime[500],
    },
  },
});