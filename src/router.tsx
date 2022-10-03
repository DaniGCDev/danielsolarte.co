import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Home = lazy(() => import('./pages/Home'));
const Error = lazy(() => import('./Error'));

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
    element: <App />,
    errorElement: <Error />,
    path: '/',
  },
]);

export default router;
