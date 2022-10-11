import BurstModeIcon from '@mui/icons-material/BurstMode';
import BurstModeOutlinedIcon from '@mui/icons-material/BurstModeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import useMainTemplateStyles from './MainTemplate.styles';

const navItems = [
  {
    icon: {
      active: <PersonIcon />,
      disabled: <PersonOutlinedIcon />,
    },
    title: 'menuItems.aboutMe',
    to: '/',
  },
  {
    icon: {
      active: <BurstModeIcon />,
      disabled: <BurstModeOutlinedIcon />,
    },
    title: 'menuItems.projects',
    to: '/projects',
  },
  {
    icon: {
      active: <WorkHistoryIcon />,
      disabled: <WorkHistoryOutlinedIcon />,
    },
    title: 'menuItems.experience',
    to: '/experience',
  },
];

export interface MainTemplateProps {
  stickyHeader?: boolean;
}

export default function MainTemplate({
  children,
  stickyHeader = false,
}: React.PropsWithChildren<MainTemplateProps>): JSX.Element {
  const { t: translate } = useTranslation();
  const classes = useMainTemplateStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <header className={classes.header} data-fixed={stickyHeader}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <ul className={classes.navigator}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={0.75}
              >
                {navItems.map((navItem, i) => {
                  const isActive = navItem.to === location.pathname;

                  return (
                    <Grid
                      item
                      className={classes.navigatorItem}
                      component="li"
                      key={`nav_item_${i}`}
                    >
                      <Link data-active={isActive} to={navItem.to}>
                        <div>
                          {navItem.icon[isActive ? 'active' : 'disabled']}
                        </div>
                        <span>{translate(navItem.title)}</span>
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            </ul>
          </Grid>
        </Grid>
      </header>
      <div className={classes.container}>{children}</div>
    </div>
  );
}
