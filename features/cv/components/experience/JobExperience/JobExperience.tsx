import ExperienceBox from '../Box';
import Section from '../../Section';

const JobExperience: React.FC = () => (
  <Section title="Experiencia laboral">
    <ExperienceBox
      jobTitle="Ext. Desarrollador Front-End"
      company="Coordinadora Mercantil"
      from={new Date(2021, 10)}
      place="Medellín, Antioquia, Colombia"
      description="Colaboro en los proyectos de la Suite Logística, aportando mis conocimientos en automatización con GitHub Actions y React.JS; igualmente, desarrollo de páginas web integradas con Firebase y Google Cloud."
      contact="https://www.qcode.co/ (Web)"
    />
    <ExperienceBox
      jobTitle="Desarrollador Full-Stack"
      company="Quality Code Software House S.A.S."
      from={new Date(2021, 3, 9)}
      place="Medellín, Antioquia, Colombia"
      description="Participo activamente en el desarrollo de varios proyectos, realicé labores de liderazgo durante 3 meses, desarrollé dos aplicaciones móviles en Flutter para iOS y Android (Una con un chat integrado y la otra para medir el tiempo trabajado), uso de metodología SCRUM para la realización de las actividades."
      contact="https://www.qcode.co/ (Web)"
    />
    <ExperienceBox
      jobTitle="Desarrollador Front-End y Back-End con JavaScript"
      company="Epifita S.A.S."
      from={new Date(2020, 10, 11)}
      to={new Date(2020, 11, 4)}
      place="Medellín, Antioquia, Colombia"
      description="Colaboré en la creación de un API que combina diferentes datos provenientes del SIATA, y realicé una página web con un mapa interactivo con figuras en 3D a razón del aniversario Nº40 del Área Metropolitana."
      contact="Alejandro Duque - https://github.com/alejoduque"
    />
  </Section>
);

export default JobExperience;
