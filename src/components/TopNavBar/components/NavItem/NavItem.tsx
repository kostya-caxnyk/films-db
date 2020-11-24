import React, { useState } from 'react';
import LinksBlock from '../LinksBlock/LinksBlock';

import s from './NavItem.module.scss';

interface ILink {
  [propName: string]: string;
}

interface NavItemProps {
  label: string;
  links: ILink[];
}

const NavItem: React.FC<NavItemProps> = ({ label, links }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const showLinksBlock = (): void => {
    setIsHovered(true);
  };

  const hideLinksBlock = (): void => {
    setIsHovered(false);
  };

  return (
    <span className={s.label} onMouseEnter={showLinksBlock} onMouseLeave={hideLinksBlock}>
      {label}
      {isHovered && <LinksBlock links={links} />}
    </span>
  );
};

export default NavItem;
