import {
  LanguageProjects,
  LanguageProjectsCategories,
  LanguageProjectsFields,
  LanguageProjectsTags,
} from '../../interfaces';

const categories: LanguageProjectsCategories = {
  BackEnd: 'Back-End',
  Contributions: 'Contribuciones',
  Designs: 'Diseños',
  FrontEnd: 'Front-End',
  FullStack: 'Full-Stack',
  Importants: 'Importantes',
  Meetings: 'Charlas',
  Mobile: 'Móvil',
  University: 'Proyectos universitarios',
};

const fields: LanguageProjectsFields = {
  categories: 'Categorías',
  showing_one: 'Mostrando {{count}} proyecto',
  showing_other: 'Mostrando {{count}} proyectos',
  tags: 'Tags',
};

const tags: LanguageProjectsTags = {
  ActixWeb: 'ActixWeb',
  Android: 'Android',
  APIRest: 'API Rest',
  Console: 'Aplicación de Consola',
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
  Responsive: 'Diseño Responsivo',
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
    links: { demo: 'Ver DEMO', github: 'GitHub' },
    title: 'A.M.V.A. 40',
  },
  BeccaLyria: {
    description: '',
    links: { docs: 'Documentación', github: 'GitHub' },
    title: 'Bot de Discord BeccaLyria',
  },
  FaztCommunity: {
    description: 'Página de inicio temporal para faztcommunity.dev',
    links: { twitter: 'Ver tweet' },
    title: 'Fazt Community landing page',
  },
  GitHubPresente: {
    description: '',
    links: { youtube: 'Ver en YouTube' },
    title: 'GitHub Presente',
  },
  languagesrs: {
    description:
      'Una librería de internacionalización (i18n) para tus proyectos',
    links: { github: 'GitHub' },
    title: 'languages-rs',
  },
  NextChat2020: {
    description: 'Messaging social network',
    links: {
      githubAPI: 'GitHub (API)',
      githubMobile: 'GitHub (Móvil)',
      githubWEB: 'GitHub (WEB)',
    },
    title: 'NextChat 2020 (v1)',
  },
  NextChat2022: {
    description: 'Red social de mensajería estilo Discord',
    links: { demo: 'Ver DEMO', github: 'GitHub (Web)' },
    title: 'NextChat',
  },
  NextDatabase: {
    description: 'ORM para MySQL',
    links: { github: 'GitHub' },
    title: 'NextDatabase',
  },
  NextMusic: {
    description: 'Reproductor de música hecho en Ionic y ReactJS',
    links: { github: 'GitHub' },
    title: 'NextMusic',
  },
  nongoose: {
    description: 'ODM for MongoDB based on Mongoose and written in Rust',
    links: { docs: 'Documentación', github: 'GitHub' },
    title: 'Nongoose',
  },
  operationsAPP: {
    description:
      'Esta aplicación te pide escoger opciones entre 1 y 4 digitos para generar 2 números de la longitud escogida; posteriormente, se sumarán o multiplicarán ambos números y el usuario deberá colocar el resultado de la operación y los números de acarreo en la parte superior (es decir, cuando sobra un número de la operación anterior se debe colocar arriba); la aplicación verificará si los números ingresados son correctos cuando presiones el botón "Validar"',
    links: { github: 'GitHub' },
    title: 'Aplicación de operaciones matemáticas básicas',
  },
  portfoliov1: {
    description: 'Portafolio personal (v1) desarrollado con CRA',
    links: { github: 'GitHub' },
    title: 'Portafolio personal v1',
  },
  portfoliov2: {
    description: 'Portafolio personal (v2) desarrollado con Rust',
    links: { github: 'GitHub' },
    title: 'Portafolio personal v2',
  },
  PTFinalProject: {
    description:
      'Esta aplicación te permite reproducir tu música local (carpeta Música) y música proveniente de YouTube/YouTube Music usando el enlace que provee al compartir',
    links: { github: 'GitHub' },
    title: 'Proyecto final Herramientas de Programación',
  },
  radiolibre: {
    description: '',
    links: { github: 'GitHub' },
    title: 'Plantilla de RadioLibre',
  },
  rustNotesCLI: {
    description: 'Administra notas en tu computador usando la consola',
    links: { github: 'GitHub' },
    title: 'rust-notes-cli',
  },
  sflynlang: {
    description:
      'Un lenguaje de programación interpretado hecho para aprender y escrito en Rust',
    links: { github: 'GitHub' },
    title: 'Sflynlang',
  },
  spooked: {
    description: 'Una CMS para Node.JS basada en la Inyección de Dependencias',
    links: { github: 'GitHub' },
    title: 'Spooked CMS',
  },
  tgs2021: {
    description:
      'Proyecto final desarrollado para la clase de Teoría General de Sistemas',
    links: { demo: 'Ver DEMO', github: 'GitHub' },
    title: 'Proyecto final de T.G.S.',
  },
};

export default projects;
