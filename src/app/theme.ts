import { createMuiTheme } from '@material-ui/core/styles';
import { grey, lime } from '@material-ui/core/colors';

export const createTheme = ({ themeType }: { themeType: 'dark' | 'light' }) => createMuiTheme({
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
  overrides: {
    MuiTimelineContent: {
      root: {
        flex: 3,
      }
    },
    MuiTimelineOppositeContent: {
      root: {
        // whiteSpace: 'no-wrap',
        lineHeight: '1.00',
        padding: '8px 16px',
        flex: '1',
      }
    },
    MuiTimelineItem: {
      missingOppositeContent: {
        '&::before': {
          flex: '0',
          padding: '0px',
        }
      }
    }
  } as any
});

