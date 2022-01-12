import Divider from '@features/common/Divider';
import { getText } from '@utils/internationalization';
import clsx from 'clsx';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import classes from './AboutMeContainer.module.scss';

const AboutMeContainer: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.container__left}>
      <About />
    </div>
    <div className={classes.container__right}>
      <h2 className={classes.container__right__title}>{getText('skills_title')}</h2>
      <Skills />
      <Divider marginTop="2.25rem" />
      <h2 className={classes.container__right__title}>{getText('best_projects_title')}</h2>
      <Projects />
    </div>
    <div className={classes.container__waves}>
      <div
        className={clsx(
          classes.container__waves__wave,
          classes['container__waves__wave--secondary']
        )}
      />
      <div
        className={clsx(classes.container__waves__wave, classes['container__waves__wave--primary'])}
      />
    </div>
  </div>
);

export default AboutMeContainer;
