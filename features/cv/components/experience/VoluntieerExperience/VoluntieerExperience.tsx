import ExperienceBox from '../Box';
import Section from '../../Section';

const VoluntieerExperience: React.FC = () => (
  <Section title="Voluntariado">
    <ExperienceBox
      jobTitle="Desarrollador y líder de proyectos"
      company="Fazt Community"
      from={new Date(2020, 5)}
      to={new Date(2020, 6)}
      description="Lideré los tres proyectos principales de la comunidad: API, web y un bot para Discord; igualmente, participé en la elaboración del bot con funciones de música y comandos varios usando Node.JS."
      contact="Fazt - https://twitter.com/FaztTech"
    />
  </Section>
);

export default VoluntieerExperience;
