import { getText } from '@utils/internationalization';
import Link from 'next/link';
import { useState } from 'react';
import classes from './Header.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import routes from '@constants/routes.constant';

const Header: React.FC = () => {
  // States
  const [pageSelected, setPageSelected] = useState<string>('');

  // Hooks
  const router = useRouter();

  // Effects
  useEffect(() => {
    if (router.pathname != pageSelected) {
      setPageSelected(router.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  if (pageSelected === '/cv') {
    return null;
  }

  return (
    <header className={classes.Header}>
      <nav className={classes.Header__nav}>
        <ul className={classes.Header__nav__list}>
          {routes.map((route, i) => (
            <Link passHref href={route.url} key={`route_${route.icon}_${i}`}>
              <li
                className={clsx(classes.Header__nav__list__item, {
                  [classes['Header__nav__list__item--active']]: route.active.includes(pageSelected),
                })}
              >
                <span className={clsx('material-icons', classes.Header__nav__list__item__icon)}>
                  {route.icon}
                </span>
                <p className={classes.Header__nav__list__item__text}>{getText(route.title)}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
