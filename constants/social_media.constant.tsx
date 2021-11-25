import ISocialMedia from '@interfaces/social_media.interface';

// Icons
import GitHubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import WhatsAppIcon from '@assets/icons/whatsapp.svg';

const socialMedia: ISocialMedia[] = [
  {
    icon: GitHubIcon,
    title: 'GitHub: @danielsolartech',
    url: 'https://www.github.com/danielsolartech'
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
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp: +57 312 623 5838',
    url: 'https://wa.me/573126235838',
  },
];

export default socialMedia;
