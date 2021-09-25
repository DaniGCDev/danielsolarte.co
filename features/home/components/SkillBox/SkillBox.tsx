import './SkillBox.module.scss';
import Img from 'next/image';

interface Props {
  alt: string;
  imageSrc: string;
}

const SkillBox: React.FC<Props> = ({ alt, imageSrc }) => {
  return (
    <div className="SkillBox">
      <div className="SkillBox__bg" />
      <Img alt={alt} src={imageSrc} />
    </div>
  );
};

export default SkillBox;
