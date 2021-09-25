import classes from './Footer.module.scss';
import Img from 'next/image';
import GitHubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';

interface Props {
  fixed?: boolean;
}

const Footer: React.FC<Props> = ({ fixed = false }) => (
  <footer className={`${classes.Footer} ${fixed ? classes['Footer--fixed'] : ''}`}>
    <div className={classes.Footer__items}>
      <a href="https://github.com/daschdev" target="_black" rel="noopener noreferrer">
        <Img alt="GitHub: @daschdev" src={GitHubIcon} layout="fill" />
      </a>
      <a href="https://www.linkedin.com/in/daschdev/" target="_black" rel="noopener noreferrer">
        <Img alt="LinkedIn: @daschdev" src={LinkedInIcon} layout="fill" />
      </a>
      <a href="https://twitter.com/daschdev" target="_black" rel="noopener noreferrer">
        <Img alt="Twitter: @daschdev" src={TwitterIcon} layout="fill" />
      </a>
    </div>
  </footer>
);

export default Footer;
