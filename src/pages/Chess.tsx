import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface ChessProps {}
const Chess: FC<ChessProps> = () => (
  <div>
    <h1>Chess</h1>
    <Outlet />
  </div>
);
export default Chess;
