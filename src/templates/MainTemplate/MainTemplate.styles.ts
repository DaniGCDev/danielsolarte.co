import { colors, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useMainTemplateStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: `0 ${theme.spacing(4)}`,
    [theme.breakpoints.down('sm')]: {
      padding: `0 ${theme.spacing(3)}`,
    },
  },
  header: {
    padding: `${theme.spacing(2)} 0`,
    '&[data-fixed="true"]': {
      left: 0,
      position: 'fixed',
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      bottom: 0,
      left: 0,
      padding: 0,
      position: 'fixed',
      width: '100%',
    },
  },
  navigator: {
    backgroundColor: colors.teal[900],
    borderRadius: theme.spacing(3),
    listStyle: 'none',
    margin: 0,
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      borderRadius: 0,
      bottom: 0,
      left: 0,
      position: 'fixed',
      width: '100%',
    },
  },
  navigatorItem: {
    '& a': {
      alignItems: 'center',
      borderRadius: theme.spacing(2.5),
      color: 'inherit',
      display: 'flex',
      gap: '6px',
      padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
      textDecoration: 'none',
      transition: '.4s background-color ease-in-out',
      '&:hover': {
        backgroundColor: colors.teal[800],
      },
      '&[data-active="true"]': {
        backgroundColor: colors.teal[700],
        [theme.breakpoints.down('sm')]: {
          '& span': { display: 'block' },
        },
      },
      '& div': {
        display: 'block',
        lineHeight: 0.5,
      },
      [theme.breakpoints.down('sm')]: {
        '& span': { display: 'none' },
      },
    },
  },
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(10),
    },
  },
}));

export default useMainTemplateStyles;
