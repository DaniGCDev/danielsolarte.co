import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { Project } from '../interfaces';

export interface ProjectContainerProps {
  data: Project;
}

export default function ProjectContainer({
  data: project,
}: ProjectContainerProps): JSX.Element {
  const { t: translate } = useTranslation();

  return (
    <Card variant="outlined">
      {project.hasImage && (
        <CardMedia
          alt={translate(`projects.${project.id}.title`)}
          component="img"
          height={230}
          image={`/images/projects/${project.id}.${
            typeof project.hasImage !== 'boolean'
              ? project.hasImage.format
              : 'png'
          }`}
        />
      )}
      <CardContent>
        <Grid container alignItems="flex-end" justifyContent="space-between">
          <Grid item>
            <Typography component="div" variant="h5">
              {translate(`projects.${project.id}.title`)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="div" variant="caption">
              {format(project.date, 'MMMM yyyy')}
            </Typography>
          </Grid>
        </Grid>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={0.5}
          mb={project.tags.length > 0 ? 1.5 : undefined}
          mt={1.5}
        >
          {project.tags.map((tag, i) => (
            <Chip
              key={`project_${project.id}_tag_${i}`}
              label={translate(`projects.tags.${tag}`)}
              size="small"
            />
          ))}
        </Box>
        <Typography variant="body2">
          {translate(`projects.${project.id}.description`)}
        </Typography>
      </CardContent>
      <CardActions>
        {project.links.map((link, i) => (
          <Button
            key={`project_${project.id}_link_${link.id}_${i}`}
            onClick={() => window.open(link.to, '_blank')}
            size="small"
          >
            {translate(`projects.${project.id}.links.${link.id}`)}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}
