import { Masonry } from '@mui/lab';
import {
  Autocomplete,
  Grid,
  Paper,
  PaperProps,
  styled,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectContainer } from '../components';
import projects from '../constants/projects';
import { ProjectCategory, ProjectFilters, ProjectTag } from '../interfaces';

const FiltersContainer = styled(Paper)<PaperProps>(({ theme }) => ({
  backgroundColor: '#1C1C21',
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export default function Projects(): JSX.Element {
  const [filters, setFilters] = useState<ProjectFilters>({});

  const { t: translate } = useTranslation();
  const theme = useTheme();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const isLaptop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('lg'),
  );

  const projectsFiltered = projects.filter((project) => {
    let result = true;

    const categories = filters.categories ?? [];
    const tags = filters.tags ?? [];

    if (categories.length > 0) {
      result = project.categories.some((category) =>
        (filters.categories ?? []).includes(category),
      );
    }

    if (tags.length > 0) {
      result = project.tags.some((tag) => (filters.tags ?? []).includes(tag));
    }

    return result;
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FiltersContainer>
          <Grid
            container
            alignItems="center"
            direction={isMobile ? 'column-reverse' : 'row'}
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={12} sm={4} md={5} lg={6}>
              <Typography variant="body2">
                {translate('projects.fields.showing', {
                  count: projectsFiltered.length,
                })}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={7}
              lg={5}
              sx={{ width: isMobile ? '100%' : undefined }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Autocomplete
                    filterSelectedOptions
                    fullWidth
                    multiple
                    limitTags={1}
                    getOptionLabel={(category) =>
                      translate(`projects.categories.${category}`)
                    }
                    onChange={(_e, value) =>
                      setFilters((prev) => ({
                        ...prev,
                        categories: value.map(
                          (key) =>
                            (
                              ProjectCategory as Record<string, ProjectCategory>
                            )[key],
                        ),
                      }))
                    }
                    options={Object.keys(ProjectCategory)}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        label={translate('projects.fields.categories')}
                      />
                    )}
                    size="small"
                    value={filters.categories ?? []}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Autocomplete
                    filterSelectedOptions
                    fullWidth
                    multiple
                    limitTags={1}
                    getOptionLabel={(key) => translate(`projects.tags.${key}`)}
                    onChange={(_e, value) =>
                      setFilters((prev) => ({
                        ...prev,
                        tags: value.map(
                          (key) =>
                            (ProjectTag as Record<string, ProjectTag>)[key],
                        ),
                      }))
                    }
                    options={Object.keys(ProjectTag)}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        label={translate('projects.fields.tags')}
                      />
                    )}
                    size="small"
                    value={filters.tags ?? []}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FiltersContainer>
      </Grid>
      <Grid item xs={12}>
        <Masonry
          columns={isMobile ? 1 : isLaptop ? 2 : 3}
          spacing={2}
          sx={{ width: `calc(100% + ${theme.spacing(2)})` }}
        >
          {projectsFiltered.map((project, i) => (
            <ProjectContainer
              data={project}
              key={`project_${project.id}_${i}`}
            />
          ))}
        </Masonry>
      </Grid>
    </Grid>
  );
}
