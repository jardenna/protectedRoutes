import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Path } from '../types';

const Nav: FC = () => (
  <nav className="main-nav">
    <ul className="main-nav-list">
      <li>
        <NavLink to={Path.Root}>Home</NavLink>
      </li>
      <li>
        <NavLink to={Path.Chess}>Chess</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
