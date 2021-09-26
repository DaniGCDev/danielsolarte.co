import classes from './Header.module.scss';
import Link from 'next/link';
import { getText } from '@utils/internationalization';

const Header: React.FC = () => (
  <header className={classes.Header}>
    <nav className={classes.Header__nav}>
      <ul className={classes.Header__nav__items}>
        <li className={`${classes.Header__nav__items__item} ${classes['Header__nav__items__item--active']}`}>
          <Link href="/">
            {getText('about_me_title')}
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/projects">
            {getText('projects_title')}
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/jobs">
            {getText('jobs_title')}
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/skills">
            {getText('skills_title')}
          </Link>
        </li>
        <li className={classes.Header__nav__items__item}>
          <Link href="/blog">
            {getText('blog_title')}
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
