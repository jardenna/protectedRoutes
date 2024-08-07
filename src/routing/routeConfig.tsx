import { createBrowserRouter, redirect } from 'react-router-dom';
import fakeAuthProvider from '../auth/auth';
import {
  loginAction,
  loginLoader,
  protectedLoader,
} from '../auth/authFunctions';
import Layout from '../layout/Layout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import Play from '../pages/Play';
import Chess from '../pages/chess/Chess';
import { Path, SubPathEnum } from '../types';

const routeConfig = createBrowserRouter([
  {
    id: 'root',
    path: Path.Root,
    errorElement: <ErrorPage />,
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
        element: <Home />,
      },
      {
        path: Path.Login,
        loader: loginLoader,
        action: loginAction,
        element: <LoginPage />,
      },
      {
        path: Path.Chess,
        element: <Chess />,
        loader: protectedLoader,
        children: [
          {
            path: SubPathEnum.Play,
            element: <Play />,
          },
          {
            path: SubPathEnum.Chat,
            element: <div>Chat</div>,
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
