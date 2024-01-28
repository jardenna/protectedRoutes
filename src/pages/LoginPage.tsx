import { FC } from 'react';
import { Form, useNavigation } from 'react-router-dom';

const LoginPage: FC = () => {
  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get('username') != null;

  return (
    <div>
      <Form method="post" replace>
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
