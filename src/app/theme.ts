import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { grey, lime } from '@material-ui/core/colors';

export const createTheme = ({ themeType }: { themeType: 'dark' | 'light' }) => responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: 'Montserrat,sans-serif;',
    fontSize: 32
  },
  palette: {
    type: themeType,
    secondary: {
      main: grey[50],
    },
    primary: {
      main: grey[50],
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
}), {
  factor: 4
});

