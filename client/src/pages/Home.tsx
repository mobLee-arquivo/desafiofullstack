import { Typography } from '@material-ui/core';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import SearchForm from '../components/SearchForm';
import useStyles from '../hooks/useStyles';

const Home: React.FC = () => {
  const classes = useStyles();
   
  return <div className={classes.root}>
    <Header/>
    <div className={classes.mainSection}>
        <Typography variant="h3">StackOverflow</Typography>
        <SearchForm/>
    </div>
    <Footer />
  </div>
};

export default Home;