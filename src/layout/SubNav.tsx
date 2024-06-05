import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SubPathEnum } from '../types';

interface subNavListItemProps {
  id: string;
  url: SubPathEnum;
  linkText: string;
}

interface SubNavListProps {
  subNavList: subNavListItemProps[];
}

const SubNav: FC<SubNavListProps> = ({ subNavList }) => (
  <nav className="sub-nav">
    <ul className="sub-nav-list">
      {subNavList.map((subnav) => (
        <li key={subnav.id}>
          <NavLink to={subnav.url}>{subnav.linkText}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default SubNav;
