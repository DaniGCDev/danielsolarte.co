import { Outlet } from 'react-router-dom';
import { MainTemplate } from './templates';

export default function App(): JSX.Element {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
}
