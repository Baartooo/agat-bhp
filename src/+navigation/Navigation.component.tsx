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
  let isAnimating = false;

  let tl = gsap.timeline();

  const openNavAndSetState = () => {
    if (refNavMobile.current && refHamburger.current && !isAnimating) {
      isAnimating = true;

      const bars = refHamburger.current.children;

      tl.kill();
      tl = gsap.timeline();

      tl
        .to(refNavMobile.current, {
          autoAlpha: 1,
          duration: .2,
          ease: 'power2.out',
        })
        .to(bars[0], {
          yPercent: 200,
          duration: .3,
          ease: 'power2.out',
        }, '<')
        .to(bars[2], {
          yPercent: -200,
          duration: .3,
          ease: 'power2.out',
        }, '<')
        .to([bars[0], bars[1]], {
          rotation: -45,
          duration: .3,
          ease: 'power2.out',
        })
        .to(bars[2], {
          rotation: 45,
          duration: .3,
          ease: 'power2.out',
          onComplete: () => setIsMobileNavOpen(true),
        }, '<');
    }
  };

  const closeNavAndSetState = () => {
    if (refNavMobile.current && refHamburger.current && !isAnimating) {
      isAnimating = true;

      const bars = refHamburger.current.children;

      tl.kill();
      tl = gsap.timeline();

      tl
        .to(bars, {
          rotation: 0,
          duration: .3,
          ease: 'power2.out',
        })
        .to(refNavMobile.current, {
          autoAlpha: 0,
          duration: .2,
          ease: 'power2.out',
        }, '<')
        .to(bars, {
          yPercent: 0,
          duration: .3,
          ease: 'power2.out',
          onComplete: () => setIsMobileNavOpen(false),
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

        <div
          className={s.navigation__hamburger}
          onClick={isMobileNavOpen ? closeNavAndSetState : openNavAndSetState}
          ref={refHamburger}
        >
          <div className={s.navigation__bar} />
          <div className={s.navigation__bar} />
          <div className={s.navigation__bar} />
        </div>
      </nav>
    </>
  );
};
