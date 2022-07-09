import ISocialMedia from '@interfaces/social_media.interface';

// Icons
import GitHubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import TwitterIcon from '@assets/icons/twitter.svg';

const socialMedia: ISocialMedia[] = [
  {
    icon: GitHubIcon,
    title: 'GitHub: @dsolartec',
    url: 'https://www.github.com/dsolartec',
  },
  {
    icon: TwitterIcon,
    title: 'Twitter: @dsolartec',
    url: 'https://www.twitter.com/dsolartec',
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn: @dsolartec',
    url: 'https://www.linkedin.com/in/dsolartec',
  },
  {
    icon: TelegramIcon,
    title: 'Telegram: @dsolartec',
    url: 'https://t.me/dsolartec',
  },
];

export default socialMedia;
