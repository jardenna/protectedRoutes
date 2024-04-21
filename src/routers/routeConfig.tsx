import { createHashRouter, redirect } from 'react-router-dom';
import {
  loginAction,
  loginLoader,
  protectedLoader,
} from '../auth/authFunctions';

import fakeAuthProvider from '../auth/auth';
import Chess from '../pages/Chess';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';
import Play from '../pages/Play';
import PublicPage from '../pages/PublicPage';
import { Path } from '../types';

const routeConfig = createHashRouter([
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
        action: loginAction,
        element: <LoginPage />,
      },
      {
        path: 'Chess',
        element: <Chess />,
        loader: protectedLoader,
        children: [
          {
            path: 'play',
            element: <Play />,
          },
        ],
      },
      {
        path: Path.Logout,
        async action() {
          // We signout in a "resource route" that we can hit from a fetcher.Form
          await fakeAuthProvider.signout();
          return redirect('/');
        },
      },
    ],
  },
]);

export default routeConfig;
