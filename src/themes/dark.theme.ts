import { colors, createTheme } from '@mui/material';

const secondaryTextColor = 'rgba(255, 255, 255, 0.35)';

const darkTheme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        clearIndicator: { color: secondaryTextColor },
        inputRoot: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: secondaryTextColor,
          },
        },
        paper: { backgroundColor: '#26262C' },
        popupIndicator: { color: secondaryTextColor },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundColor: '#1C1C21' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { backgroundColor: '#26262C' },
      },
    },
  },
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
      secondary: secondaryTextColor,
    },
  },
});

export default darkTheme;
