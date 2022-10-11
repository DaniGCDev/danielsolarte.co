import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Experience from './pages/Experience';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Error = lazy(() => import('./Error'));

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Experience />,
        path: 'experience',
      },
      {
        element: <Projects />,
        path: 'projects',
      },
    ],
    element: <App />,
    errorElement: <Error />,
    path: '/',
  },
]);

export default router;
