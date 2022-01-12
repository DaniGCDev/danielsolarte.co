import Section from '../Section';
import SmallBox from '../SmallBox';

const Languages: React.FC = () => (
  <Section title="Idiomas">
    <SmallBox key="languages" texts={['Español (Nativo)', 'Inglés (A2)']} />
  </Section>
);

export default Languages;
