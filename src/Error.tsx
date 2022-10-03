import {
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { MainTemplate } from './templates';

export default function Error(): JSX.Element {
  const theme = useTheme();

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md'),
  );

  return (
    <MainTemplate stickyHeader>
      <Grid
        container
        alignItems="center"
        direction="column"
        justifyContent="center"
        style={{
          height: `calc(100vh - ${theme.spacing(isTablet ? 12 : 6)})`,
          width: '100%',
        }}
      >
        <Grid item>
          <Typography color="primary" fontSize={120}>
            404
          </Typography>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" direction="column" spacing={0.25}>
            <Grid item>
              <Typography variant="h4">Página no encontrada</Typography>
            </Grid>
            <Grid item>
              <Typography>
                Ha ocurrido un error, haz{' '}
                <Link style={{ textDecoration: 'none' }} to="/">
                  <Typography color="primary" component="span">
                    click aquí
                  </Typography>
                </Link>{' '}
                para ir al inicio.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainTemplate>
  );
}
