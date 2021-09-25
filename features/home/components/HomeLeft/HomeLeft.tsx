import SkillBox from "../SkillBox";
import classes from "./HomeLeft.module.scss";
import FlutterIcon from '@assets/images/skills/flutter.png';
import RustIcon from '@assets/images/skills/rust.png';
import TypeScriptIcon from '@assets/images/skills/typescript.svg';
import MongoDBIcon from '@assets/images/skills/mongodb.png';
import AvatarImage from '@assets/images/avatar.png';
import Img from 'next/image';
import LogoImage from '@assets/images/logo.svg';

const HomeLeft: React.FC = () => (
  <section className={classes.HomeLeft}>
    <div className={classes.HomeLeft__bg}>
      <div className={classes.HomeLeft__bg__light} />
    </div>
    <div className={classes.HomeLeft__logo}>
      <Img alt="Logo" src={LogoImage} width={71} height={41} />
    </div>
    <div className={classes.HomeLeft__profileImage}>
      <div className={classes.HomeLeft__profileImage__skills}>
        <SkillBox alt="Rust" image={RustIcon} />
        <SkillBox alt="TypeScript" image={TypeScriptIcon} />
        <SkillBox alt="MongoDB" image={MongoDBIcon} />
        <SkillBox alt="Flutter" image={FlutterIcon} />
      </div>
      <div className={classes.HomeLeft__profileImage__avatar}>
        <Img alt="Avatar" src={AvatarImage} layout="fill" />
      </div>
    </div>
  </section>
);

export default HomeLeft;
