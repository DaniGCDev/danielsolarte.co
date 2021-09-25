import classes from './HomeContainer.module.scss';

const HomeContainer: React.FC = () => {
  return (
    <div className={classes.HomeContainer}>
      <div className={classes.HomeContainer__left}>
        <div className={classes.HomeContainer__left__bg}>
          <div className={classes.HomeContainer__left__bg__light} />
        </div>
      </div>
      <div className={classes.HomeContainer__right}></div>
    </div>
  );
};

export default HomeContainer;
