import { NavLink, Outlet } from 'react-router-dom';

import AuthStatus from '../components/AuthStatus';

function Layout() {
  return (
    <section className="main-container">
      <header className="header">
        <article className="container">
          <h1>Auth Example using RouterProvider</h1>
          <AuthStatus />
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="chess">Chess</NavLink>
            <NavLink to="login">Login</NavLink>
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
