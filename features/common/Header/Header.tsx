import classes from './Header.module.scss';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className={classes.Header}>
    <nav className={classes.Header__nav}>
      <ul className={classes.Header__nav__items}>
        <li className={`${classes.Header__nav__items__item} ${classes['Header__nav__items__item--active']}`}>
          <Link href="/">
            About me
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/jobs">
            Experience
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/skills">
            Skills
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
