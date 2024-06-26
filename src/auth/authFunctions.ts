import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import fakeAuthProvider from './auth';

export async function loginAction(loaderAction: LoaderFunctionArgs) {
  const formData = await loaderAction.request.formData();
  const username = formData.get('username') as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if (!username) {
    return {
      error: 'You must provide a username to log in',
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await fakeAuthProvider.signin(username);
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: 'Invalid login attempt',
    };
  }

  const redirectTo = formData.get('redirectTo') as string | null;
  return redirect(redirectTo || '/');
}

export async function loginLoader() {
  if (fakeAuthProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}

export function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  if (!fakeAuthProvider.isAuthenticated) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect(`/login?${params.toString()}`);
  }
  return null;
}
