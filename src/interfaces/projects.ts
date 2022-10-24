export enum ProjectCategory {
  BackEnd = 'BackEnd',
  Contributions = 'Contributions',
  Designs = 'Designs',
  FrontEnd = 'FrontEnd',
  FullStack = 'FullStack',
  Importants = 'Importants',
  Meetings = 'Meetings',
  Mobile = 'Mobile',
  University = 'University',
}

export interface ProjectLink {
  id: string;
  to: string;
}

export enum ProjectTag {
  ActixWeb = 'ActixWeb',
  Android = 'Android',
  APIRest = 'APIRest',
  Console = 'Console',
  CSharp = 'CSharp',
  CSS = 'CSS',
  DiscordJS = 'DiscordJS',
  ExpressJS = 'ExpressJS',
  Figma = 'Figma',
  Flutter = 'Flutter',
  GraphQL = 'GraphQL',
  HTML = 'HTML',
  Ionic = 'Ionic',
  IOS = 'IOS',
  JavaScript = 'JavaScript',
  MongoDB = 'MongoDB',
  MySQL = 'MySQL',
  NestJS = 'NestJS',
  NextJS = 'NextJS',
  NodeJS = 'NodeJS',
  ReactJS = 'ReactJS',
  Responsive = 'Responsive',
  Rust = 'Rust',
  SASS = 'SASS',
  SocketIO = 'SocketIO',
  TypeORM = 'TypeORM',
  TypeScript = 'TypeScript',
  ViteJS = 'ViteJS',
  WinForms = 'WinForms',
  WPF = 'WPF',
}

export interface Project {
  categories: ProjectCategory[];
  date: Date;
  hasImage?: boolean | { format: 'jpeg' | 'png' };
  id: string;
  links: ProjectLink[];
  tags: ProjectTag[];
}

export type ProjectFilters = Partial<Pick<Project, 'categories' | 'tags'>>;
