import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export default makeStyles<Theme>((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flexDirection:'column',
    backgroundColor: theme.palette.background.default,
  },
  header: {
    flex: 0,
  },
  mainSection: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    height: '100vh',
    paddingRight: theme.spacing(20),
    paddingLeft: theme.spacing(20),
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    bottom: 0,
    flex: 0,
    textAlign: 'center',
    backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
}));
