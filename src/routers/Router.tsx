import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AuthRequired from '../pages/AuthRequired';
import Layout from '../pages/Layout';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home page</h1>} />
      <Route path="login" element={<LoginPage />} />

      <Route element={<AuthRequired />}>
        <Route path="protected" element={<h1>Super secret info here</h1>} />
      </Route>
    </Route>,
  ),
);

export default router;
