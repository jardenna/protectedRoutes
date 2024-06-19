import { FC } from 'react';
import AuthStatus from '../components/AuthStatus';
import Nav from './Nav';

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
