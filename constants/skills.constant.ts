import CSS3 from '@assets/images/skills/css3.png';
import Flutter from '@assets/images/skills/flutter.png';
import Git from '@assets/images/skills/git.png';
import HTML5 from '@assets/images/skills/html5.png';
import JavaScript from '@assets/images/skills/javascript.png';
import MongoDB from '@assets/images/skills/mongodb.png';
import MySQL from '@assets/images/skills/mysql.png';
import NestJS from '@assets/images/skills/nestjs.svg';
import NextJS from '@assets/images/skills/nextjs.png';
import NodeJS from '@assets/images/skills/nodejs.png';
import ReactJS from '@assets/images/skills/reactjs.png';
import Rust from '@assets/images/skills/rust.png';
import SASS from '@assets/images/skills/sass.png';
import SocketIO from '@assets/images/skills/socketio.svg';
import TypeScript from '@assets/images/skills/typescript.svg';

interface ISkill {
  title: string;
  image: StaticImageData;
}

const SkillsData: ISkill[] = [
  { title: 'CSS3', image: CSS3 },
  { title: 'Flutter', image: Flutter },
  { title: 'Git', image: Git },
  { title: 'HTML5', image: HTML5 },
  { title: 'JavaScript', image: JavaScript },
  { title: 'MongoDB', image: MongoDB },
  { title: 'MySQL', image: MySQL },
  { title: 'NestJS', image: NestJS },
  { title: 'NextJS', image: NextJS },
  { title: 'NodeJS', image: NodeJS },
  { title: 'ReactJS', image: ReactJS },
  { title: 'Rust', image: Rust },
  { title: 'SASS', image: SASS },
  { title: 'SocketIO', image: SocketIO },
  { title: 'TypeScript', image: TypeScript },
];

export default SkillsData;
