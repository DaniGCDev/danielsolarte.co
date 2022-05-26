import ISocialMedia from '@interfaces/social_media.interface';

// Icons
import GitHubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import TwitterIcon from '@assets/icons/twitter.svg';

const socialMedia: ISocialMedia[] = [
  {
    icon: GitHubIcon,
    title: 'GitHub: @iamdacso',
    url: 'https://www.github.com/iamdacso',
  },
  {
    icon: TwitterIcon,
    title: 'Twitter: @iamdacso',
    url: 'https://www.twitter.com/iamdacso',
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn: @iamdacso',
    url: 'https://www.linkedin.com/in/iamdacso',
  },
  {
    icon: TelegramIcon,
    title: 'Telegram: @iamdacso',
    url: 'https://t.me/iamdacso',
  },
];

export default socialMedia;
