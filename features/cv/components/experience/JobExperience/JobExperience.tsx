import ExperienceBox from '../Box';
import Section from '../../Section';

const JobExperience: React.FC = () => (
  <Section title="Experiencia laboral">
    <ExperienceBox
      company="Coordinadora Mercantil"
      contact="https://www.qcode.co/ (Web)"
      description={
        <ul style={{ padding: '0 20px' }}>
          <li>
            Automatización de despliegues con GitHub Actions con rollback si fallan las pruebas
            automatizadas (Cypress);
          </li>
          <li>Desarrollo de páginas web con ReactJS, Material UI, Firebase y Google Cloud; y</li>
          <li>Edición de plugin y tema de WordPress.</li>
        </ul>
      }
      from={new Date(2021, 10)}
      jobTitle="Extensión Desarrollador Front-End y devOps"
      place="Medellín, Antioquia, Colombia"
    />
    <ExperienceBox
      showDay
      company="Quality Code Software House S.A.S."
      contact="https://www.qcode.co/ (Web)"
      description={
        <ul style={{ padding: '0 20px' }}>
          <li>
            Desarrollo de una aplicación móvil en Flutter con un chat y llamadas por voz integradas;
          </li>
          <li>
            Desarrollo de una aplicación móvil en Flutter estilo contador de tiempo para empleados,
            para iOS y Android;
          </li>
          <li>Uso de metodología SCRUM y liderazgo de proyectos;</li>
          <li>Edición de plugins de WordPress;</li>
          <li>Desarrollo de APIs en NestJS con GraphQL y REST;</li>
          <li>Uso de MongoDB y PostgreSQL;</li>
          <li>Ajuste y realización de nuevas características para APIs construídas en C#;</li>
          <li>Diseño de interfaces web usando Figma y las guías de diseño de Material Design; y</li>
          <li>Redacción de textos para la página web de la empresa.</li>
        </ul>
      }
      from={new Date(2021, 3, 9)}
      jobTitle="Desarrollador Full-Stack"
      place="Medellín, Antioquia, Colombia"
    />
    <ExperienceBox
      company="Epifita S.A.S."
      contact="Alejandro Duque - https://github.com/alejoduque"
      description="Colaboré en la creación de un API que combina diferentes datos provenientes del SIATA, y realicé una página web con un mapa interactivo con figuras en 3D a razón del aniversario Nº40 del Área Metropolitana."
      from={new Date(2020, 10, 11)}
      jobTitle="Desarrollador Front-End y Back-End con JavaScript"
      place="Medellín, Antioquia, Colombia"
      to={new Date(2020, 11, 4)}
    />
  </Section>
);

export default JobExperience;
