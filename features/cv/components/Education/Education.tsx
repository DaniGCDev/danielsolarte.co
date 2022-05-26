import Section from '../Section';
import EducationBox from './Box';

const Education: React.FC = () => (
  <Section title="Educación">
    <EducationBox
      title="Diplomado en Artes de Datos"
      institution="Universidad EAFIT"
      from={new Date(2022, 2, 13)}
      to={new Date(2022, 3, 30)}
      place="Medellín, Antioquia, Colombia"
    />
    <EducationBox
      title="Bootcamp front-end, habilidades blandas y marketing digital"
      institution="Medellín Tech Fest 2021 (Valle del software)"
      from={new Date(2021, 10, 23)}
      to={new Date(2021, 10, 27)}
      place="Medellín, Antioquia, Colombia"
    />
    <EducationBox
      title="Academia de Inglés"
      institution="English Club"
      from={new Date(2016, 10)}
      to={new Date(2018, 10)}
      place="Bello, Antioquia, Colombia"
    />
  </Section>
);

export default Education;
