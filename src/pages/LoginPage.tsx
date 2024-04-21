import { Form, useLocation, useNavigation } from 'react-router-dom';

import { FC } from 'react';

const LoginPage: FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';
  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get('username') != null;

  return (
    <div>
      <Form method="post" replace>
        <input type="hidden" name="redirectTo" value={from} />
        <label htmlFor="username">
          Username: <input name="username" id="username" />
        </label>
        <button type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </button>
      </Form>
    </div>
  );
};
export default LoginPage;
