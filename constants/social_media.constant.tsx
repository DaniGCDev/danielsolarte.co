import ISocialMedia from '@interfaces/social_media.interface';

// Icons
import GitHubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';

const socialMedia: ISocialMedia[] = [
  {
    icon: GitHubIcon,
    title: 'GitHub: @danielsolartech',
    url: 'https://www.github.com/danielsolartech',
  },
  {
    icon: TwitterIcon,
    title: 'Twitter: @danielsolartech',
    url: 'https://www.twitter.com/danielsolartech',
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn: @danielsolartech',
    url: 'https://www.linkedin.com/in/danielsolartech',
  },
];

export default socialMedia;
