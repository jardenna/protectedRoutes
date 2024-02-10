import { Link, Outlet } from 'react-router-dom';
import AuthStatus from '../components/AuthStatus';

function Layout() {
  return (
    <section className="main-container">
      <header className="header">
        <article className="container">
          <h1>Auth Example using RouterProvider</h1>
          <AuthStatus />
          <nav>
            <Link to="/">Home</Link>
            <Link to="protected">Protected</Link>
            <Link to="login">Login</Link>
          </nav>
        </article>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
