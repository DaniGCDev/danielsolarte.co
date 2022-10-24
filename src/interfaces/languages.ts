export interface LanguageAboutMe {
  bestProjects: string;
  description: string;
  skillsTitle: string;
}

export interface LanguageExperience {
  description: string;
}

export interface LanguageExperiences {
  Coordinadora: LanguageExperience;
  Epifita: LanguageExperience;
  Melonn: LanguageExperience;
  QCode: LanguageExperience;
}

export interface LanguageMenuItems {
  aboutMe: string;
  experience: string;
  projects: string;
}

export interface LanguageProject<Links> {
  description: string;
  links: Links;
  title: string;
}

export interface LanguageProjectsCategories {
  BackEnd: string;
  Contributions: string;
  Designs: string;
  FrontEnd: string;
  FullStack: string;
  Importants: string;
  Meetings: string;
  Mobile: string;
  University: string;
}

export interface LanguageProjectsFields {
  categories: string;
  showing_one: string;
  showing_other: string;
  tags: string;
}

export interface LanguageProjectsTags {
  ActixWeb: string;
  Android: string;
  APIRest: string;
  Console: string;
  CSharp: string;
  CSS: string;
  DiscordJS: string;
  ExpressJS: string;
  Figma: string;
  Flutter: string;
  GraphQL: string;
  HTML: string;
  Ionic: string;
  IOS: string;
  JavaScript: string;
  MongoDB: string;
  MySQL: string;
  NestJS: string;
  NextJS: string;
  NodeJS: string;
  ReactJS: string;
  Responsive: string;
  Rust: string;
  SASS: string;
  SocketIO: string;
  TypeORM: string;
  TypeScript: string;
  ViteJS: string;
  WinForms: string;
  WPF: string;
}

export interface LanguageProjects {
  categories: LanguageProjectsCategories;
  fields: LanguageProjectsFields;
  tags: LanguageProjectsTags;

  AMVA40: LanguageProject<{ demo: string; github: string }>;
  BeccaLyria: LanguageProject<{ docs: string; github: string }>;
  FaztCommunity: LanguageProject<{ twitter: string }>;
  GitHubPresente: LanguageProject<{ youtube: string }>;
  languagesrs: LanguageProject<{ github: string }>;
  NextChat2020: LanguageProject<{
    githubAPI: string;
    githubMobile: string;
    githubWEB: string;
  }>;
  NextChat2022: LanguageProject<{ demo: string; github: string }>;
  NextDatabase: LanguageProject<{ github: string }>;
  NextMusic: LanguageProject<{ github: string }>;
  nongoose: LanguageProject<{ docs: string; github: string }>;
  operationsAPP: LanguageProject<{ github: string }>;
  portfoliov1: LanguageProject<{ github: string }>;
  portfoliov2: LanguageProject<{ github: string }>;
  PTFinalProject: LanguageProject<{ github: string }>;
  radiolibre: LanguageProject<{ github: string }>;
  rustNotesCLI: LanguageProject<{ github: string }>;
  sflynlang: LanguageProject<{ github: string }>;
  spooked: LanguageProject<{ github: string }>;
  tgs2021: LanguageProject<{ demo: string; github: string }>;
}

export interface LanguageSkills {
  fullStack: string;
  frontEnd: string;
  backEnd: string;
  devOps: string;
  soft: string;
}

export interface LanguageResource {
  aboutMe: LanguageAboutMe;
  experience: LanguageExperiences;
  menuItems: LanguageMenuItems;
  projects: LanguageProjects;
  skills: LanguageSkills;
}
