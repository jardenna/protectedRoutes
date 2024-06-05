import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SubNav from '../layout/SubNav';
import { SubPathEnum } from '../types';

const Chess: FC = () => {
  const test = [{ id: '1', url: SubPathEnum.Play, linkText: 'Play' }];
  return (
    <div>
      <SubNav subNavList={test} />
      <h1>Chess</h1>
      <Outlet />
    </div>
  );
};

export default Chess;
