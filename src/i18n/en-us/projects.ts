import {
  LanguageProjects,
  LanguageProjectsCategories,
  LanguageProjectsFields,
  LanguageProjectsTags,
} from '../../interfaces';

const categories: LanguageProjectsCategories = {
  BackEnd: 'Back-End',
  Contributions: 'Contributions',
  Designs: 'Designs',
  FrontEnd: 'Front-End',
  FullStack: 'Full-Stack',
  Importants: 'Importants',
  Meetings: 'Meetings',
  Mobile: 'Mobile',
  University: 'University projects',
};

const fields: LanguageProjectsFields = {
  categories: 'Categories',
  showing_one: 'Showing {{count}} project',
  showing_other: 'Showing {{count}} projects',
  tags: 'Tags',
};

const tags: LanguageProjectsTags = {
  ActixWeb: 'ActixWeb',
  Android: 'Android',
  APIRest: 'API Rest',
  Console: 'Console APP',
  CSharp: 'C#',
  CSS: 'CSS',
  DiscordJS: 'Discord.JS',
  ExpressJS: 'Express.JS',
  Figma: 'Figma',
  Flutter: 'Flutter',
  GraphQL: 'GraphQL',
  HTML: 'HTML',
  Ionic: 'Ionic',
  IOS: 'iOS',
  JavaScript: 'JavaScript',
  MongoDB: 'MongoDB',
  MySQL: 'MySQL',
  NestJS: 'NestJS',
  NextJS: 'NextJS',
  NodeJS: 'NodeJS',
  ReactJS: 'ReactJS',
  Responsive: 'Responsive Design',
  Rust: 'Rust',
  SASS: 'SASS/SCSS',
  SocketIO: 'Socket.IO',
  TypeORM: 'TypeORM',
  TypeScript: 'TypeScript',
  ViteJS: 'ViteJS',
  WinForms: 'Windows Form',
  WPF: 'WPF',
};

const projects: LanguageProjects = {
  categories,
  fields,
  tags,

  AMVA40: {
    description: '',
    links: { demo: 'View DEMO', github: 'GitHub' },
    title: 'A.M.V.A. 40',
  },
  BeccaLyria: {
    description: '',
    links: { docs: 'Documentation', github: 'GitHub' },
    title: 'BeccaLyria Discord bot',
  },
  FaztCommunity: {
    description: 'Temporary landing page for faztcommunity.dev',
    links: { twitter: 'View tweet' },
    title: 'Fazt Community landing page',
  },
  GitHubPresente: {
    description: '',
    links: { youtube: 'Watch on YouTube' },
    title: 'GitHub Presente',
  },
  languagesrs: {
    description: 'An internationalization library for your projects',
    links: { github: 'GitHub' },
    title: 'languages-rs',
  },
  NextChat2020: {
    description: 'Messaging social network',
    links: {
      githubAPI: 'GitHub (API)',
      githubMobile: 'GitHub (Mobile)',
      githubWEB: 'GitHub (WEB)',
    },
    title: 'NextChat 2020 (v1)',
  },
  NextChat2022: {
    description: 'Messaging social network like Discord',
    links: { demo: 'View DEMO', github: 'GitHub (Web)' },
    title: 'NextChat',
  },
  NextDatabase: {
    description: 'ORM for MySQL',
    links: { github: 'GitHub' },
    title: 'NextDatabase',
  },
  NextMusic: {
    description: 'Music Player built with Ionic and ReactJS',
    links: { github: 'GitHub' },
    title: 'NextMusic',
  },
  nongoose: {
    description: 'ODM for MongoDB based on Mongoose and written in Rust',
    links: { docs: 'Documentation', github: 'GitHub' },
    title: 'Nongoose',
  },
  operationsAPP: {
    description:
      'This application asks you to choose options between 1 and 4 digits to generate 2 numbers of the chosen length; later, both numbers will be added or multiplied and the user must place the result of the operation and the carry numbers at the top (that is, when a number remains from the previous operation, it must be placed at the top); the application will check if the entered numbers are correct when you press the "Validate" button',
    links: { github: 'GitHub' },
    title: 'Basic math operations APP',
  },
  portfoliov1: {
    description: 'Personal portfolio v1 built with CRA',
    links: { github: 'GitHub' },
    title: 'Personal portfolio v1',
  },
  portfoliov2: {
    description: 'Personal portfolio v2 built with Rust',
    links: { github: 'GitHub' },
    title: 'Personal portfolio v2',
  },
  PTFinalProject: {
    description:
      'This app allows you to play your local music (Music folder) and music from YouTube/YouTube Music using the link it provides when sharing',
    links: { github: 'GitHub' },
    title: 'Programming Tools final project',
  },
  radiolibre: {
    description: '',
    links: { github: 'GitHub' },
    title: 'RadioLibre template',
  },
  rustNotesCLI: {
    description: 'Manage notes in your computer using the console',
    links: { github: 'GitHub' },
    title: 'rust-notes-cli',
  },
  sflynlang: {
    description:
      'An interpreted programming language made to learn and written in Rust',
    links: { github: 'GitHub' },
    title: 'Sflynlang',
  },
  spooked: {
    description: 'A CMS for NodeJS based on Dependency Injection',
    links: { github: 'GitHub' },
    title: 'Spooked CMS',
  },
  tgs2021: {
    description: 'Final project developed for the General Systems Theory class',
    links: { demo: 'View DEMO', github: 'GitHub' },
    title: 'G.S.T. final project',
  },
};

export default projects;
