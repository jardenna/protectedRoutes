import { FC } from 'react';
import { NavLink, useFetcher, useRouteLoaderData } from 'react-router-dom';
import { Path } from '../types';

interface AuthStatusProps {}
const AuthStatus: FC<AuthStatusProps> = () => {
  // Get our logged in user, if they exist, from the root route loader data
  const { user } = useRouteLoaderData('root') as { user: string | null };
  const fetcher = useFetcher();

  if (!user) {
    return <NavLink to={Path.Login}>Login</NavLink>;
  }

  const isLoggingOut = fetcher.formData != null;

  return (
    <div>
      <p>Welcome {user}!</p>
      <fetcher.Form method="post" action="/logout">
        <button type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? 'Signing out...' : 'Sign out'}
        </button>
      </fetcher.Form>
    </div>
  );
};
export default AuthStatus;
