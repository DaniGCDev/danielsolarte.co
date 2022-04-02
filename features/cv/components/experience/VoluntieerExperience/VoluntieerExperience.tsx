import ExperienceBox from '../Box';
import Section from '../../Section';

const VoluntieerExperience: React.FC = () => (
  <Section title="Voluntariado">
    <ExperienceBox
      company="Fazt Community"
      contact="Fazt - https://twitter.com/FaztTech"
      description="Lideré los tres proyectos principales de la comunidad: API, web y un bot para Discord; igualmente, participé en la elaboración del bot con funciones de música y comandos varios usando Node.JS."
      from={new Date(2020, 5)}
      jobTitle="Desarrollador y líder de proyectos"
      to={new Date(2020, 6)}
    />
  </Section>
);

export default VoluntieerExperience;
