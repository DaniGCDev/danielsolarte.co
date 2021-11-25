import classes from './Divider.module.scss';

interface Props {
  marginTop?: string | number;
}

const Divider: React.FC<Props> = ({ marginTop }) => (
  <div className={classes.divider} style={{ marginTop }} />
);

export default Divider;
