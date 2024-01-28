import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Path } from '../types';

const Nav: FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={Path.Root}>Public Page</NavLink>
      </li>
      <li>
        <NavLink to={Path.Protected}>Protected Page</NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
