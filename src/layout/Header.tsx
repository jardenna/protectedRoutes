import { FC } from 'react';
import Nav from './Nav';
import AuthStatus from '../components/AuthStatus';

const Header: FC = () => (
  <header className="main-header">
    <article className="main-header-content container">
      <div className="logo">Auth Example using RouterProvider</div>
      <div>
        <AuthStatus />
        <Nav />
      </div>
    </article>
  </header>
);

export default Header;
