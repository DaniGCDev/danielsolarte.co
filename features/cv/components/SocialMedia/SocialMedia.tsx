import classes from './SocialMedia.module.scss';
import data from '@constants/social_media.constant';
import Img from 'next/image';
import WebIcon from '@assets/icons/web.svg';
import EmailIcon from '@assets/icons/email.svg';

const SocialMedia: React.FC = () => (
  <div className={classes.socialMedia}>
    {/* Web */}
    <a className={classes.socialMedia__link} href="https://www.danielsolarte.com/">
      <div className={classes.socialMedia__link__icon}>
        <Img src={WebIcon} />
      </div>
      <div className={classes.socialMedia__link__text}>www.danielsolarte.com</div>
    </a>
    {/* E-mail */}
    <a className={classes.socialMedia__link} href="mailto:contact@danielsolarte.com">
      <div className={classes.socialMedia__link__icon}>
        <Img src={EmailIcon} />
      </div>
      <div className={classes.socialMedia__link__text}>contact@danielsolarte.com</div>
    </a>
    {/* Other */}
    {data.map((sm, i) => (
      <a
        className={classes.socialMedia__link}
        href={sm.url}
        key={`social_media_cv_${i}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={classes.socialMedia__link__icon}>
          <Img src={sm.icon} />
        </div>
        <div className={classes.socialMedia__link__text}>{sm.title}</div>
      </a>
    ))}
  </div>
);

export default SocialMedia;
