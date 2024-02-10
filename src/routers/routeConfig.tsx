import { createBrowserRouter } from 'react-router-dom';

import fakeAuthProvider from '../auth/auth';
import { loginLoader, protectedLoader } from '../auth/authFunctions';
import Chess from '../pages/Chess';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';
import Play from '../pages/Play';
import PublicPage from '../pages/PublicPage';
import { Path } from '../types';

const routeConfig = createBrowserRouter([
  {
    path: Path.Root,
    errorElement: <ErrorPage />,
  },
  {
    id: 'root',
    path: Path.Root,
    loader() {
      // Our root route always provides the user, if logged in
      return {
        user: fakeAuthProvider.username,
      };
    },
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PublicPage />,
      },
      {
        path: Path.Login,
        loader: loginLoader,
        element: <LoginPage />,
      },
      {
        path: Path.Protected,
        loader: protectedLoader,
        element: <h1>Super secret info here</h1>,
      },
      {
        path: 'Chess',
        element: <Chess />,
        children: [
          {
            path: 'play',
            element: <Play />,
          },
        ],
      },
    ],
  },
]);

export default routeConfig;
