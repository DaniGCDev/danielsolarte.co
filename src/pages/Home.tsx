import {
  Avatar,
  Grid,
  IconButton,
  Paper,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SkillsContainer } from '../components';
import {
  backEndSkills,
  devOpsSkills,
  frontEndSkills,
  fullStackSkills,
  softSkills,
} from '../constants/skills';
import socialMedia from '../constants/social-media';

export default function Home(): JSX.Element {
  const { t: translate } = useTranslation();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <Grid container justifyContent="space-between" spacing={isTablet ? 4 : 2}>
      <Grid item xs={12} md={6}>
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
      <Grid item xs={12} md={6}>
        <Paper sx={{ paddingX: 2.5, paddingY: isMobile ? 2.5 : 3.5 }}>
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
        </Paper>
      </Grid>
    </Grid>
  );
}
