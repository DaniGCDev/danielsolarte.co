import classes from './Section.module.scss';

interface Props {
  title: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ children, title }) => (
  <div className={classes.section}>
    <div className={classes.section__title}>{title}</div>
    <div className={classes.section__content}>{children}</div>
  </div>
);

export default Section;
