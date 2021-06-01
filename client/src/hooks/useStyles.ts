import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export default makeStyles<Theme>((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    backgroundColor: theme.palette.background.default,
  },
  mainSection: {
    height: '100%',
    paddingRight: theme.spacing(20),
    paddingLeft: theme.spacing(20),
    textAlign: 'center',
  },
  footer: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
}));
