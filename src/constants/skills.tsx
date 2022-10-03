import {
  AWSIcon,
  ExpressJSIcon,
  FigmaIcon,
  FileZillaIcon,
  GitHubIcon,
  GitIcon,
  GraphQLIcon,
  JavaScriptIcon,
  JestJSIcon,
  JiraIcon,
  LinuxIcon,
  MaterialUIIcon,
  MongoDBIcon,
  NestJSIcon,
  NextJSIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  ReactJSIcon,
  ReduxIcon,
  RustIcon,
  SASSIcon,
  ThreeJSIcon,
  TrelloIcon,
  TypeScriptIcon,
} from '../assets/icons';
import { Skill } from '../interfaces';

export const backEndSkills: Skill[] = [
  { icon: <ExpressJSIcon />, title: 'ExpressJS' },
  { icon: <MongoDBIcon />, title: 'MongoDB' },
  { icon: <NestJSIcon />, title: 'NestJS' },
  { icon: <PostgreSQLIcon />, title: 'PostgreSQL' },
  { icon: <RustIcon />, title: 'Rust' },
];

export const devOpsSkills: Skill[] = [
  { icon: <AWSIcon />, title: 'AWS' },
  { icon: <FileZillaIcon />, title: 'FileZilla' },
  { icon: <GitIcon />, title: 'Git' },
  { icon: <GitHubIcon />, title: 'GitHub Actions' },
  { icon: <LinuxIcon />, title: 'Linux' },
];

export const frontEndSkills: Skill[] = [
  { icon: <FigmaIcon />, title: 'Figma' },
  { icon: <JestJSIcon />, title: 'JestJS' },
  { icon: <MaterialUIIcon />, title: 'Material UI' },
  { icon: <NextJSIcon />, title: 'NextJS' },
  { icon: <ReactJSIcon />, title: 'ReactJS' },
  { icon: <ReduxIcon />, title: 'Redux' },
  { icon: <SASSIcon />, title: 'SASS' },
  { icon: <ThreeJSIcon />, title: 'ThreeJS' },
];

export const fullStackSkills: Skill[] = [
  { icon: <GraphQLIcon />, title: 'GraphQL' },
  { icon: <JavaScriptIcon />, title: 'JavaScript' },
  { icon: <NodeJSIcon />, title: 'NodeJS' },
  { icon: <TypeScriptIcon />, title: 'TypeScript' },
];

export const softSkills: Skill[] = [
  { icon: <JiraIcon />, title: 'Jira' },
  { icon: <TrelloIcon />, title: 'Trello' },
];
