import classes from './ProjectPreviewBox.module.scss';
import Img from 'next/image';
import Link from 'next/link';
import { getText } from '@utils/internationalization';

interface Props {
  image: StaticImageData;
  project_key: string;
}

const ProjectPreviewBox: React.FC<Props> = ({ project_key, image }) => (
  <div className={classes.ProjectPreviewBox}>
    <Link href={`/projects/${project_key}`} passHref>
      <figure className={classes.ProjectPreviewBox__card}>
          <div className={classes.ProjectPreviewBox__card__image}>
            <Img src={image} layout="fill" />
          </div>
          <figcaption className={classes.ProjectPreviewBox__card__content}>
            <h2 className={classes.ProjectPreviewBox__card__content__title}>
              {getText(`project_${project_key}_title`)}
            </h2>
            <p className={classes.ProjectPreviewBox__card__content__desc}>
              {getText(`project_${project_key}_desc`)}
            </p>
          </figcaption>
      </figure>
    </Link>
  </div>
);

export default ProjectPreviewBox;
