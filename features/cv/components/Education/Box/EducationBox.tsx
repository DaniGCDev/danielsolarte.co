import { format } from 'date-fns';
import classes from './EducationBox.module.scss';

interface Props {
  title: string;
  institution: string;
  from: Date;
  to?: Date;
  place: string;
}

const EducationBox: React.FC<Props> = ({ title, institution, from, to, place }) => (
  <div className={classes.container}>
    <h3 className={classes.container__title}>{title}</h3>
    <h5 className={classes.container__institution}>{institution}</h5>
    <div className={classes.container__information}>
      <div className={classes.container__information__date}>
        {format(from, 'MM/yyyy')} - {to ? format(to, 'MM/yyyy') : 'Presente'}
      </div>
      <div className={classes.container__information__place}>{place}</div>
    </div>
  </div>
);

export default EducationBox;
