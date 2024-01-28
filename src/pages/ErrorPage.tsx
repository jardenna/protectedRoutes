import { FC } from 'react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

const ErrorPage: FC = () => {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
};
export default ErrorPage;
