import classes from './Header.module.scss';

const Header: React.FC = () => (
  <div className={classes.header}>
    <div className={classes.header__top}>
      <h1 className={classes.header__top__title}>Daniel Solarte Chaverra</h1>
      <span className={classes.header__top__personalTitle}>Desarrollador de Software</span>
    </div>
    <p className={classes.header__description}>
      Soy un desarrollador de software autodidacta, me adapto fácilmente a varios proyectos y
      disfruto aprender cosas nuevas diariamente; soy muy sociable y amigable.
    </p>
  </div>
);

export default Header;
