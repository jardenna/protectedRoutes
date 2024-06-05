import { Outlet } from 'react-router-dom';
import AuthStatus from '../components/AuthStatus';
import Nav from '../components/Nav';

function Layout() {
  return (
    <section className="main-container">
      <header className="header">
        <article className="container">
          <div className="logo">Auth Example using RouterProvider</div>
          <div>
            <Nav />
          </div>
          <AuthStatus />
        </article>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </section>
  );
}

export default Layout;
