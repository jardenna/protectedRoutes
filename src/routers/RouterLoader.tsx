import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from 'react-router-dom';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';

const RouterLoader = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home page</h1>} loader={async () => null} />
      <Route path="login" element={<LoginPage />} />

      <Route
        path="protected"
        element={<h1>Super secret info here</h1>}
        loader={async () => {
          const isLoggedIn = false;
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (!isLoggedIn) {
            return redirect('/login');
          }
          return null;
        }}
      />
    </Route>,
  ),
);

export default RouterLoader;
