import classes from './Header.module.scss';
import Link from 'next/link';
import { getText } from '@utils/internationalization';
import Img from 'next/image';
import LogoImage from '@assets/images/logo.svg';
import ToggleIcon from '@assets/icons/menu.svg';
import { useState } from 'react';

const Header: React.FC = () => {
  // States
  const [headerActive, setHeaderActive] = useState<boolean>(false);

  return (
    <header className={classes.Header}>
      <div className={classes.Header__content}>
        <div className={classes.Header__content__logo}>
          <Img alt="Logo" src={LogoImage} layout="fill" />
        </div>
        <button className={classes.Header__content__toggle} onClick={() => setHeaderActive(!headerActive)}>
          <Img alt="Display menu icon" src={ToggleIcon} layout="fill" />
        </button>
      </div>
      <nav className={`${classes.Header__nav} ${headerActive ? classes['Header__nav--active'] : ''}`}>
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
};

export default Header;
