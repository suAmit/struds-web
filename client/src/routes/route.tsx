import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import Search from '../pages/search/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

export default router;
