import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { subNavList } from './utils';
import SubNav from '../../layout/SubNav';

const Chess: FC = () => (
  <div>
    <SubNav subNavList={subNavList} />
    <h1>Chess</h1>
    <Outlet />
  </div>
);

export default Chess;
