import React, { FC } from 'react';

import s from './NavItem.module.scss';

interface INavItem {
  text: string;
  onClick: () => void;
}

export const NavItem: FC<INavItem> = ({ text, onClick }) => {
  return (
    <div className={s.navItem} onClick={onClick}>
      {text}
    </div>
  );
};
