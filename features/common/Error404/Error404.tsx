import classes from './Error404.module.scss';
import ErrorImage from '@assets/images/undraw_page_not_found_re_e9o6.svg';
import Img from 'next/image';
import Link from 'next/link';
import { getText } from '@utils/internationalization';

const Error404: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.container__image}>
      <Img alt={getText('error_404_alt')} src={ErrorImage} />
    </div>
    <h1 className={classes.container__title}>
      {getText('error_404_title')}
    </h1>
    <p className={classes.container__description}>
      {getText('error_404_desc')}
    </p>
    <Link passHref href="/">
      <span className={classes.container__link}>
        {getText('error_404_button')}
      </span>
    </Link>
  </div>
);

export default Error404;
