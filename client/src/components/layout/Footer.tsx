import { Typography } from '@material-ui/core';
import useStyles from '../../hooks/useStyles';

// create a component
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Izaías Araújo
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
