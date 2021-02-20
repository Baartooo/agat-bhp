import React, { FC, ReactNode } from 'react';

import { NavItem } from './nav-item/Navitem.component';

import AgatBHP from 'assets/svg/AgatBHP-logo-cut.svg';

import s from './Navigation.module.scss';

interface INavigation {
  children?: ReactNode
}

export const Navigation: FC<INavigation> = () => {

  return (
    <nav className={s.navigation}>
      <div className={s.navigation__logo}>
        <AgatBHP className={s.navigation__logoSvg} />
      </div>

      <NavItem text={'start'} onClick={() => null} />
      <NavItem text={'o nas'} onClick={() => null} />
      <NavItem text={'oferta'} onClick={() => null} />
      <NavItem text={'kontakt'} onClick={() => null} />

    </nav>
  );
};
