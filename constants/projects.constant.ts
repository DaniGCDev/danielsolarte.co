import ProjectCategory from '@enums/project-category.enum';
import IProject from '@interfaces/projects.interface';

// Images
import AmvaAppWebHome from '@assets/images/projects/amva_app_web_home.png';
import BeccaLyriaBot from '@assets/images/projects/becca_lyria_bot.png';
import FaztCommunityLandingPage from '@assets/images/projects/fazt_community_landing_page.png';
import FaztBot from '@assets/images/projects/faztbot.png';
import GitHubPresente from '@assets/images/projects/github_presente_meeting.png';
import NextChatV1Profile from '@assets/images/projects/nextchat_v1_profile.png';
import NextChatIcon from '@assets/images/projects/nextchat_icon.png';
import NextMusicConcept from '@assets/images/projects/nextmusic_concept.png';
import PersonalPortfolioV1Home from '@assets/images/projects/personal_portfolio_v1_home.png';
import PersonalPortfolioV1Projects from '@assets/images/projects/personal_portfolio_v1_projects.png';
import PersonalPortfolioV1Skills from '@assets/images/projects/personal_portfolio_v1_skills_contact.png';
import RustNotesCLI from '@assets/images/projects/rust_notes_cli.png';
import RustLangES from '@assets/images/projects/rustlang_es_icon.png';
import Sflynlang from '@assets/images/projects/sflynlang_icon.png';
import WebTemplatesRadioLibreCC from '@assets/images/projects/web_templates_radiolibrecc.png';

const ProjectsData: IProject[] = [
  // October, 2021
  {
    best: true,
    category: ProjectCategory.Mobile,
    date: new Date(2021, 10),
    images: [],
    key: 'nextchat_mobile',
    links: [
      { key: 'github_android', url: 'https://github.com/NextChatORG/nextchat-android' },
    ],
    principal_image: NextChatIcon,
  },
  {
    best: true,
    category: ProjectCategory.BackEnd,
    date: new Date(2021, 10),
    images: [],
    key: 'nongoose_rust',
    links: [
      { key: 'github', url: 'https://github.com/NextChatORG/nongoose' },
      { key: 'docs', url: 'https://nongoose.nextchat.org' },
    ],
  },
  // December, 2020
  {
    best: false,
    category: ProjectCategory.Meeting,
    date: new Date(2020, 12),
    images: [RustLangES],
    links: [
      { key: 'youtube', url: 'https://www.youtube.com/channel/UCkFoBOX11Aub4sKHAzu7uOw' },
    ],
    key: 'rustlang_es',
  },
  {
    best: false,
    category: ProjectCategory.FrontEnd,
    date: new Date(2020, 12),
    images: [WebTemplatesRadioLibreCC],
    links: [
      { key: 'github', url: 'https://github.com/daschdev/web_templates' },
    ],
    key: 'radiolibrecc',
  },
  // November, 2020
  {
    best: false,
    category: ProjectCategory.Meeting,
    date: new Date(2020, 11, 17),
    images: [GitHubPresente],
    links: [
      { key: 'youtube', url: 'https://youtu.be/l8bLDR89qHA?t=4893' },
    ],
    key: 'github_presente',
    showDay: true,
  },
  {
    best: false,
    category: [ProjectCategory.Contribution, ProjectCategory.FullStack],
    date: new Date(2020, 11),
    images: [AmvaAppWebHome],
    links: [
      { key: 'demo', url: 'https://amva40.github.io/' },
      { key: 'github', url: 'https://github.com/daschdev/amva-app' },
    ],
    key: 'amva_web',
  },
  // October, 2020
  {
    best: false,
    category: [ProjectCategory.Contribution, ProjectCategory.DiscordBot],
    date: new Date(2020, 10),
    images: [BeccaLyriaBot],
    links: [
      { key: 'github', url: 'https://github.com/BeccaLyria/discord-bot' },
      { key: 'github_docs', url: 'https://github.com/BeccaLyria/discord-documentation' },
    ],
    key: 'beccalyria',
  },
  // September, 2020
  {
    best: false,
    category: ProjectCategory.FrontEnd,
    date: new Date(2020, 9),
    images: [PersonalPortfolioV1Home, PersonalPortfolioV1Projects, PersonalPortfolioV1Skills],
    links: [
      { key: 'github', url: 'https://github.com/daschdev/daschdev.github.io' },
    ],
    key: 'portfolio_v1',
  },
  // August, 2020
  {
    best: false,
    category: [ProjectCategory.BackEnd, ProjectCategory.Learn],
    date: new Date(2020, 8),
    images: [Sflynlang],
    links: [
      { key: 'github', url: 'https://github.com/sflynlang/sflynlang-interpreter' },
    ],
    key: 'sflynlang',
  },
  {
    best: false,
    category: [ProjectCategory.BackEnd, ProjectCategory.Learn],
    date: new Date(2020, 8),
    images: [],
    links: [
      { key: 'github', url: 'https://github.com/daschdev/spooked' },
    ],
    key: 'spooked',
  },
  {
    best: false,
    category: [ProjectCategory.BackEnd, ProjectCategory.Learn],
    date: new Date(2020, 8),
    images: [RustNotesCLI],
    links: [
      { key: 'github', url: 'https://github.com/daschdev/rust-notes-cli' },
    ],
    key: 'rust_notes_cli',
  },
  // July, 2020
  {
    best: false,
    category: [ProjectCategory.Design, ProjectCategory.Learn, ProjectCategory.Mobile],
    date: new Date(2020, 7),
    images: [NextMusicConcept],
    links: [
      { key: 'github', url: 'https://github.com/daschdev/nextmusic' },
    ],
    key: 'nextmusic',
  },
  {
    best: false,
    category: ProjectCategory.FrontEnd,
    date: new Date(2020, 7),
    images: [FaztCommunityLandingPage],
    links: [
      { key: 'twitter', url: 'https://twitter.com/FaztTech/status/1281102226237292544' },
    ],
    key: 'faztcommunity',
  },
  // June, 2020
  {
    best: false,
    category: [ProjectCategory.Contribution, ProjectCategory.DiscordBot],
    date: new Date(2020, 6),
    images: [FaztBot],
    links: [
      { key: 'github', url: 'https://github.com/faztcommunity/fazt-bot' },
    ],
    key: 'faztbot',
  },
  {
    best: false,
    category: [ProjectCategory.FullStack],
    date: new Date(2020, 6),
    images: [NextChatV1Profile],
    links: [
      { key: 'github_api', url: 'https://github.com/danielsolartech/nextchat-api' },
      { key: 'github_web', url: 'https://github.com/danielsolartech/nextchat-web' },
    ],
    key: 'nextchat_v1',
  },
  // May, 2020
  {
    best: false,
    category: [ProjectCategory.Contribution, ProjectCategory.BackEnd],
    date: new Date(2020, 5),
    images: [],
    links: [
      { key: 'github', url: 'https://github.com/faztcommunity/music-player-backend' },
    ],
    key: 'music_player_backend',
  },
];

export default ProjectsData;
