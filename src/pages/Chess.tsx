import { NavLink, Outlet } from 'react-router-dom';

import { FC } from 'react';

interface ChessProps {}
const Chess: FC<ChessProps> = () => (
  <div>
    <NavLink to="play">Play</NavLink>
    <h1>Chess</h1>
    <Outlet />
  </div>
);
export default Chess;
