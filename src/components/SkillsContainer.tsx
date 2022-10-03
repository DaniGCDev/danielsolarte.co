import { Box, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Skill } from '../interfaces';

export interface SkillsContainerProps {
  data: Skill[];
  id: string;
  title: string;
  withMarginTop?: boolean;
}

export default function SkillsContainer({
  data,
  id,
  title,
  withMarginTop = false,
}: SkillsContainerProps): JSX.Element {
  const { t: translate } = useTranslation();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return (
    <>
      <Typography
        align="center"
        color="rgba(0, 0, 0, 0.8)"
        id={`${id}-title`}
        sx={{
          marginBottom: isMobile ? 2.5 : 3.5,
          marginTop: withMarginTop ? (isMobile ? 2.5 : 3.5) : undefined,
        }}
        variant="h5"
      >
        {translate(title)}
      </Typography>
      <Grid container justifyContent="center" spacing={isMobile ? 2 : 4}>
        {data.map((skill, i) => (
          <Grid item key={`${id}_${i}`}>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              gap="6px"
            >
              <div style={{ fontSize: isMobile ? 12 : 24, lineHeight: 0.5 }}>
                {skill.icon}
              </div>
              <Typography color="rgba(0, 0, 0, 0.8)" variant="subtitle2">
                {skill.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
