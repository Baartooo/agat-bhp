import React, { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { NavItem } from './nav-item/Navitem.component';
import { NavMobile } from './mobile-nav/NavMobile.component';

import AgatBHP from 'assets/svg/AgatBHP-logo-cut.svg';

import s from './Navigation.module.scss';

interface INavigation {
  refNav: RefObject<HTMLDivElement>;
  children?: ReactNode
}

export const Navigation: FC<INavigation> = ({ refNav }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const refNavMobile = useRef<HTMLDivElement>(null);
  const refHamburger = useRef<HTMLDivElement>(null);
  let tl = gsap.timeline();

  const openOrHideNavDependingOnState = () => {
    const ALPHA = isMobileNavOpen ? 0 : 1;

    if (refNavMobile.current && refHamburger.current) {
      tl.kill();
      tl = gsap.timeline();

      tl
        .to(refNavMobile.current, {
          autoAlpha: ALPHA,
        })
        .to(refHamburger.current, {
          
        });

    }
  };

  useEffect(() => {
    if (refNavMobile.current !== null) {
      gsap.set(refNavMobile.current, {
        autoAlpha: 0,
      });
    }
  }, []);

  return (
    <>
      <NavMobile refWrapper={refNavMobile} />
      <nav className={s.navigation} ref={refNav}>
        <div className={s.navigation__logo}>
          <AgatBHP className={s.navigation__logoSvg} />
        </div>

        <NavItem text={'start'} onClick={() => null} isDesktop />
        <NavItem text={'o nas'} onClick={() => null} isDesktop />
        <NavItem text={'oferta'} onClick={() => null} isDesktop />
        <NavItem text={'kontakt'} onClick={() => null} isDesktop />

        <div className={s.navigation__hamburger} onClick={openOrHideNavDependingOnState} ref={refHamburger}>
          <div className={s.navigation__bar} />
          <div className={s.navigation__bar} />
          <div className={s.navigation__bar} />
        </div>
      </nav>
    </>
  );
};
