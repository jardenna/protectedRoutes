import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SubNav from '../../layout/SubNav';
import { subNavList } from './utils';

const Chess: FC = () => (
  <div>
    <SubNav subNavList={subNavList} />
    <h1>Chess</h1>
    <Outlet />
  </div>
);

export default Chess;
