import classes from './SmallBox.module.scss';

interface Props {
  key: string;
  texts: string[];
}

const SmallBox: React.FC<Props> = ({ key, texts }) => (
  <div className={classes.container}>
    {texts.map((text, i) => (
      <div className={classes.container__box} key={`${key}_${i}`}>
        {text}
      </div>
    ))}
  </div>
);

export default SmallBox;
