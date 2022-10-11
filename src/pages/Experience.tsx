import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab';
import { Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import jobExperience from '../constants/experience';

export default function Experience(): JSX.Element {
  const {
    i18n: { resolvedLanguage },
    t: translate,
  } = useTranslation();

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );

  const locale = resolvedLanguage === 'es' ? es : enUS;

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} lg={8}>
        <Timeline
          position={isTablet ? 'right' : 'alternate'}
          sx={{
            [`& .${timelineItemClasses.root}:before`]: isTablet
              ? { flex: 0, padding: 0 }
              : undefined,
          }}
        >
          {jobExperience.map((experience, i) => (
            <TimelineItem key={`job_experience_${experience.id}_${i}`}>
              <TimelineSeparator>
                <TimelineDot />
                {i !== jobExperience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography color="primary" variant="h6">
                  {experience.title}
                </Typography>
                <Typography variant="subtitle2">
                  {format(experience.since, 'dd MMMM/yyyy', { locale })} -{' '}
                  {format(experience.to, 'dd MMMM/yyyy', { locale })}
                </Typography>
                <Typography variant="caption">{experience.company}</Typography>
                <Typography color="text.secondary" sx={{ marginTop: 1 }}>
                  {translate(`experience.${experience.id}.description`)}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </Grid>
  );
}
