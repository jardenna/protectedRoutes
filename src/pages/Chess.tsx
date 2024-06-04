import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Chess: FC= () => (
  <div>
    <NavLink to="play">Play</NavLink>
    <h1>Chess</h1>
    <Outlet />
  </div>
);
export default Chess;
