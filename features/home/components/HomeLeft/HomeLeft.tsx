import SkillBox from "../SkillBox";
import classes from "./HomeLeft.module.scss";
import AvatarImage from '@assets/images/avatar.png';
import Img from 'next/image';
import LogoImage from '@assets/images/logo.svg';
import SkillsData from "@constants/skills.constant";

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
        {SkillsData.slice(0, 4).map((data, i) => (
          <SkillBox key={`skill_${data.title.toLowerCase().replace(/\s/gi, '_')}_${i}`} alt={data.title} image={data.image} />
        ))}
      </div>
      <div className={classes.HomeLeft__profileImage__avatar}>
        <Img alt="Avatar" src={AvatarImage} layout="fill" />
      </div>
    </div>
  </section>
);

export default HomeLeft;
