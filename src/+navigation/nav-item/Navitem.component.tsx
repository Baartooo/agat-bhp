import React, { FC } from 'react';

import s from './NavItem.module.scss';

interface INavItem {
  text: string;
  isDesktop?: boolean;
  onClick: () => void;
}

export const NavItem: FC<INavItem> = ({ text, onClick, isDesktop = false }) => {
  return (
    <div className={s(s.navItem, { desktop: isDesktop }, { mobile: !isDesktop })} onClick={onClick}>
      {text}
    </div>
  );
};
