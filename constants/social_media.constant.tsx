import ISocialMedia from '@interfaces/social_media.interface';

// Icons
import GitHubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import TwitterIcon from '@assets/icons/twitter.svg';

const socialMedia: ISocialMedia[] = [
  {
    icon: GitHubIcon,
    title: 'GitHub: @DaniGCDev',
    url: 'https://www.github.com/DaniGCDev',
  },
  {
    icon: TwitterIcon,
    title: 'Twitter: @DaniGCDev',
    url: 'https://www.twitter.com/DaniGCDev',
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn: @DaniGCDev',
    url: 'https://www.linkedin.com/in/DaniGCDev',
  },
  {
    icon: TelegramIcon,
    title: 'Telegram: @DaniGCDev',
    url: 'https://t.me/DaniGCDev',
  },
];

export default socialMedia;
