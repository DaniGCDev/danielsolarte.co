import ProjectsData from '@constants/projects.constant';
import classes from './Projects.module.scss';
import Link from 'next/link';
import { getText } from '@utils/internationalization';
import Img from 'next/image';

const Projects: React.FC = () => (
  <div className={classes.container}>
    {ProjectsData.filter((x) => x.best).map((project, i) => (
      <Link passHref href={`/project/${project.key}`} key={`best_project_${project.key}_${i}`}>
        <figure className={classes.container__item}>
          <div className={classes.container__item__image}>
            <Img
              alt={getText(`project_${project.key}_image_alt`)}
              layout="fill"
              objectFit="cover"
              src={project.principal_image ?? '/images/no_image.png'}
            />
          </div>
          <figcaption className={classes.container__item__caption}>
            <h2 className={classes.container__item__caption__title}>
              {getText(`project_${project.key}_title`)}
            </h2>
            <p className={classes.container__item__caption__description}>
              {getText(`project_${project.key}_desc`)}
            </p>
          </figcaption>
          <div className={classes.container__item__button}>
            <div className="material-icons">
              chevron_right
            </div>
          </div>
        </figure>
      </Link>
    ))}
  </div>
);

export default Projects;
