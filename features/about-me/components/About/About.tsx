import classes from './About.module.scss';
import AvatarImage from '@assets/images/avatar.jpg';
import Img from 'next/image';
import FlagImage from '@assets/images/co_flag.png';
import socialMedia from '@constants/social_media.constant';
import { getText } from '@utils/internationalization';
import Divider from '@features/common/Divider';

const About: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.container__avatar}>
      <Img alt={getText('avatar_alt')} src={AvatarImage} />
    </div>
    <div className={classes.container__text}>
      <h1 className={classes.container__text__title}>
        Daniel Solarte Chaverra
        <div className={classes.container__text__title__flag}>
          <Img alt={getText('flag_alt')} src={FlagImage} />
        </div>
      </h1>
      <div className={classes.container__text__description}>
        <p>{getText('about_me_desc_1')}</p>
        <p>{getText('about_me_desc_2')}</p>
        <p>{getText('about_me_desc_3')}</p>
      </div>
      <Divider marginTop="1.25rem" />
      <ul className={classes.container__text__social_media}>
        {socialMedia.map((social_media, i) => (
          <li key={`social_media_${social_media.icon}_${i}`}>
            <a
              className={classes.container__text__social_media__item}
              href={social_media.url}
              rel="noreferrer"
              target="_blank"
              title={social_media.title}
            >
              <Img alt={social_media.title} layout="fill" src={social_media.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default About;
