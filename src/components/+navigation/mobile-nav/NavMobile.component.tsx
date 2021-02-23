import React, { FC, RefObject } from 'react';

import { NavigationContent } from 'types';

import { NavItem } from 'shared/components/nav-item/Navitem.component';

import s from './NavMobile.module.scss';

interface INavMobile {
  refWrapper: RefObject<HTMLDivElement>;
  navigationContent: NavigationContent;
}

export const NavMobile: FC<INavMobile> = ({ refWrapper, navigationContent }) => {
  return (
    <div className={s.navMobile} ref={refWrapper}>
      <NavItem text={navigationContent.start} onClick={() => null} />
      <NavItem text={navigationContent.about} onClick={() => null} />
      <NavItem text={navigationContent.offer} onClick={() => null} />
      <NavItem text={navigationContent.contact} onClick={() => null} />
    </div>
  );
};
