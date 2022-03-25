import SkillsData from '@constants/skills.constant';
import Section from '../Section';
import SmallBox from '../SmallBox';

const Skills: React.FC = () => (
  <Section title="Habilidades">
    <SmallBox id="skill" texts={SkillsData.map((s) => s.title)} />
  </Section>
);

export default Skills;
