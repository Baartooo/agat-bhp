import React, { FC, RefObject } from 'react';

import { NavItem } from '../nav-item/Navitem.component';

import s from './NavMobile.module.scss';

interface INavMobile {
  refWrapper: RefObject<HTMLDivElement>;
}

export const NavMobile: FC<INavMobile> = ({ refWrapper }) => {
  return (
    <div className={s.navMobile} ref={refWrapper}>
      <NavItem text={'start'} onClick={() => null} />
      <NavItem text={'o nas'} onClick={() => null} />
      <NavItem text={'oferta'} onClick={() => null} />
      <NavItem text={'kontakt'} onClick={() => null} />
    </div>
  );
};
