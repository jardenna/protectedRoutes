import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '../pages/ErrorPage';
import Layout from '../pages/Layout';
import PublicPage from '../pages/PublicPage';
import { Path } from '../types';

const router = createBrowserRouter([
  {
    path: Path.Root,
    errorElement: <ErrorPage />,
  },
  {
    id: 'root',
    path: Path.Root,

    element: <Layout />,
    children: [
      {
        index: true,
        element: <PublicPage />,
      },
    ],
  },
]);

export default router;
