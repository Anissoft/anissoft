import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: (theme: Theme) => ({
    position: 'relative',
    minWidth: '330px',
    maxWidth: theme.breakpoints.values.lg,
  }),
  menu: (theme: Theme) => ({
    width: '100%',
    padding: '16px 0px',
    position: 'sticky',
    top: '0px',
    backgroundColor: theme.palette.background.default,
    zIndex: 1,
  }),
  content: () => ({
    // [theme.breakpoints.up('md')]: {
    //   maxWidth: '100%',
    // },
  }),
  avatar: (theme: Theme) => ({
    [theme.breakpoints.up('sm')]: {
      zIndex: 2,
    },
    zIndex: 0,
  }),
  intro: {},
  experience: {},
  socials: {},
}));
