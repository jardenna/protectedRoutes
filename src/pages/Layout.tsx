import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Layout: FC = () => (
  <section className="main-container">
    <header className="header">
      <article className="container">
        <h1>Auth Example using RouterProvider</h1>

        <Nav />
      </article>
    </header>

    <main className="container">
      <Outlet />
    </main>

    <footer className="container">
      © 2023 Startup Vite, All rights reserved.
    </footer>
  </section>
);
export default Layout;
