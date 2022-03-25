import classes from './SmallBox.module.scss';

interface Props {
  id: string;
  texts: string[];
}

const SmallBox: React.FC<Props> = ({ id, texts }) => (
  <div className={classes.container}>
    {texts.map((text, i) => (
      <div className={classes.container__box} key={`${id}_${i}`}>
        {text}
      </div>
    ))}
  </div>
);

export default SmallBox;
