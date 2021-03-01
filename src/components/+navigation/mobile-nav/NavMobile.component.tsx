import React, { FC, RefObject } from 'react';

import { NavigationContent } from 'types';

import { NavItem } from 'shared/components/nav-item/Navitem.component';

import s from './NavMobile.module.scss';

interface INavMobile {
  refWrapper: RefObject<HTMLDivElement>;
  navigationContent: NavigationContent;
  closeNavAndGoTo: (id: string) => void;
}

export const NavMobile: FC<INavMobile> = ({ refWrapper, navigationContent, closeNavAndGoTo }) => {
  return (
    <div className={s.navMobile} ref={refWrapper}>
      <NavItem text={navigationContent.start} onClick={() => closeNavAndGoTo('start')} />
      <NavItem text={navigationContent.about} onClick={() => closeNavAndGoTo('about')} />
      <NavItem text={navigationContent.offer} onClick={() => closeNavAndGoTo('offer')} />
      <NavItem text={navigationContent.contact} onClick={() => closeNavAndGoTo('contact')} />
    </div>
  );
};
