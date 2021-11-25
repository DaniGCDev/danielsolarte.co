import classes from './Skills.module.scss';
import Img from 'next/image';
import SkillsData from '@constants/skills.constant';

const Skills: React.FC = () => (
  <ul className={classes.container}>
    {SkillsData.map((skill, i) => (
      <li className={classes.container__item} key={`skill_${i}`}>
        <div className={classes.container__item__image}>
          <Img alt={skill.title} layout="fill" objectFit="contain" src={skill.image} />
        </div>
        <h5 className={classes.container__item__title}>
          {skill.title}
        </h5>
      </li>
    ))}
  </ul>
);

export default Skills;
