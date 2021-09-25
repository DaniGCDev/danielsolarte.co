import classes from './HomeRight.module.scss';
import Img from 'next/image';
import FlagImage from '@assets/images/co_flag.png';
import ProjectPreviewBox from '../ProjectPreviewBox';
import ProjectsData from 'constants/projects.constant';

const HomeRight: React.FC = () => (
  <section className={classes.HomeRight}>
    <div className={classes.HomeRight__bg}>
      <div className={classes.HomeRight__bg__light} />
    </div>
    <section className={classes.HomeRight__content}>
      <h1 className={classes.HomeRight__content__title}>
        Daniel Solarte Chaverra
        <div className={classes.HomeRight__content__title__flag}>
          <Img alt="Colombia Flag" src={FlagImage} width={57} height={43} />
        </div>
      </h1>
      <p className={classes.HomeRight__content__about}>
        Cross-platform software developer with experience in JavaScript, TypeScript, Rust, NodeJS, ReactJS, Flutter and SASS.
      </p>
      <section className={classes.HomeRight__content__recentProjects}>
        <h2 className={classes.HomeRight__content__recentProjects__title}>
          Recent projects
        </h2>
        <div className={classes.HomeRight__content__recentProjects__box}>
          {ProjectsData.slice(0, 3).map((data) => (
            <ProjectPreviewBox key={`recent_project_${data.key}`} project_key={data.key} image={data.images[0]} />
          ))}
        </div>
      </section>
    </section>
  </section>
);

export default HomeRight;
