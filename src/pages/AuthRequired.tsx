import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRequired: FC = () => {
  const isLoggedIn = false;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default AuthRequired;
