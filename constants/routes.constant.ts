import IRoute from '@interfaces/routes.interface';

const routes: IRoute[] = [
  {
    active: ['', '/', '/about'],
    icon: 'person',
    title: 'about_me_title',
    url: '/',
  },
  {
    active: ['/projects', '/project/*'],
    icon: 'burst_mode',
    title: 'projects_title',
    url: '/projects',
  },
  {
    active: ['/jobs'],
    icon: 'verified',
    title: 'jobs_title',
    url: '/jobs',
  },
  {
    active: ['/contact'],
    icon: 'contact_page',
    title: 'contact_title',
    url: '/contact',
  },
  {
    active: ['/blog'],
    icon: 'logo_dev',
    title: 'blog_title',
    url: '/blog',
  },
];

export default routes;
