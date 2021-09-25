import Footer from 'features/common/Footer';
import Header from 'features/common/Header';
import HomeLeft from '../components/HomeLeft';
import HomeRight from '../components/HomeRight';
import classes from './HomeContainer.module.scss';

const HomeContainer: React.FC = () => (
  <div className={classes.HomeContainer}>
    <Header />
    <HomeLeft />
    <HomeRight />
    <Footer fixed />
  </div>
);

export default HomeContainer;
