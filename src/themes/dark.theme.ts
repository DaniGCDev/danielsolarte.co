import { colors, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#131316',
      paper: colors.teal[50],
    },
    primary: {
      contrastText: '#FFFFFF',
      main: colors.teal[400],
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.8)',
    },
  },
});

export default darkTheme;
