import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ProjectContainer, SkillsContainer } from '../components';
import projects from '../constants/projects';
import {
  backEndSkills,
  devOpsSkills,
  frontEndSkills,
  fullStackSkills,
  softSkills,
} from '../constants/skills';
import socialMedia from '../constants/social-media';
import { ProjectCategory } from '../interfaces';

export default function Home(): JSX.Element {
  const { t: translate } = useTranslation();

  return (
    <Grid container alignItems="center" justifyContent="center" spacing={4}>
      <Grid item xs={12}>
        <Grid container alignItems="center" direction="column" spacing={4}>
          <Grid item>
            <Avatar
              alt="Selfie"
              src="/images/avatar.webp"
              sx={{ height: 200, width: 200 }}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container alignItems="center" direction="column" spacing={3}>
              <Grid item>
                <Grid
                  container
                  alignItems="center"
                  direction="column"
                  spacing={1}
                >
                  <Grid item>
                    <Typography color="primary" fontWeight="bold" variant="h5">
                      Daniel Solarte
                    </Typography>
                  </Grid>
                  <Grid item style={{ maxWidth: '70%' }}>
                    <Typography align="center" lineHeight={1.35}>
                      {translate('aboutMe.description')}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Paper>
                  {socialMedia.map((socialMedia, i) => (
                    <Tooltip
                      key={`social_media_${i}`}
                      title={socialMedia.title}
                    >
                      <IconButton
                        color="primary"
                        onClick={() => window.open(socialMedia.url, '_black')}
                      >
                        {socialMedia.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={9}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color="rgba(0, 0, 0, .8)" fontWeight="medium">
              {translate('aboutMe.skillsTitle')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SkillsContainer
              data={fullStackSkills}
              id="full-stack-skills"
              title="skills.fullStack"
            />
            <SkillsContainer
              withMarginTop
              data={frontEndSkills}
              id="front-end-skills"
              title="skills.frontEnd"
            />
            <SkillsContainer
              withMarginTop
              data={backEndSkills}
              id="back-end-skills"
              title="skills.backEnd"
            />
            <SkillsContainer
              withMarginTop
              data={devOpsSkills}
              id="dev-ops-skills"
              title="skills.devOps"
            />
            <SkillsContainer
              withMarginTop
              data={softSkills}
              id="soft-skills"
              title="skills.soft"
            />
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={9}>
        <Divider>{translate('aboutMe.bestProjects')}</Divider>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {projects
            .filter((project) =>
              project.categories.includes(ProjectCategory.Importants),
            )
            .slice(0, 2)
            .map((project, i) => (
              <Grid item key={`project_${project.id}_${i}`} xs={12} sm={6}>
                <ProjectContainer data={project} size="small" />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
