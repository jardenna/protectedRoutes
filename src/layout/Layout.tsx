import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout: FC = () => (
  <section className="main-container">
    <Header />
    <main className="container">
      <Outlet />
    </main>
    <Footer />
  </section>
);

export default Layout;
