import classes from './SkillBox.module.scss';
import Img from 'next/image';

interface Props {
  alt: string;
  image: StaticImageData;
}

const SkillBox: React.FC<Props> = ({ alt, image }) => (
  <div className={classes.SkillBox}>
    <div className={classes.SkillBox__img}>
      <Img alt={alt} src={image} />
    </div>
  </div>
);

export default SkillBox;
