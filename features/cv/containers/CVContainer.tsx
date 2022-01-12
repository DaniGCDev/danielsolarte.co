import { PDFExport } from '@progress/kendo-react-pdf';
import { useRef } from 'react';
import { handleDownloadCV } from '../handlers';
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import classes from './CVContainer.module.scss';
import JobExperience from '../components/experience/JobExperience';
import Skills from '../components/Skills';
import VoluntieerExperience from '../components/experience/VoluntieerExperience';
import Education from '../components/Education';
import Languages from '../components/Languages';

const CVContainer: React.FC = () => {
  // Hooks
  const pdf = useRef<PDFExport | null>(null);

  return (
    <>
      <button className={classes.downloadButton} onClick={handleDownloadCV(pdf)}>
        Descargar
      </button>
      <PDFExport fileName="daniel_solarte_cv" paperSize="A2" ref={pdf}>
        <Header />
        <SocialMedia />
        <div className={classes.container}>
          <div className={classes.container__left}>
            <JobExperience />
            <VoluntieerExperience />
          </div>
          <div className={classes.container__right}>
            <Education />
            <Skills />
            <Languages />
          </div>
        </div>
      </PDFExport>
    </>
  );
};

export default CVContainer;
