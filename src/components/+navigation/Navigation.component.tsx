import React, { FC, RefObject, useEffect, useRef, useState } from 'react';

import { gsap, ScrollToPlugin } from 'gsap/all';

import { NavigationContent } from 'types';
import { showOrHideNavigationDependingOnScrollDirection } from 'shared/helpers/navigation.helper';
import { useScrollDirection } from 'shared/hooks/use-scroll-direction';
import { hideNavigation } from './Navigation.animations';

import { NavItem } from 'shared/components/nav-item/Navitem.component';
import { NavMobile } from './mobile-nav/NavMobile.component';

import AgatBHP from 'assets/svg/AgatBHP-logo-cut.svg';

import s from './Navigation.module.scss';

interface INavigation {
  refNav: RefObject<HTMLDivElement>;
  navigationContent: NavigationContent;
}

export const Navigation: FC<INavigation> = ({ refNav, navigationContent }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const refNavMobile = useRef<HTMLDivElement>(null);
  const refHamburger = useRef<HTMLDivElement>(null);
  const isAnimating = useRef<boolean>(false);
  const scrollDirection = useScrollDirection();

  let tl = gsap.timeline();

  const openNavAndSetState = () => {
    if (refNavMobile.current && refHamburger.current && !isAnimating.current) {
      isAnimating.current = true;

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
          onComplete: () => {
            isAnimating.current = false;
            setIsMobileNavOpen(true);
          },
        }, '<');
    }
  };

  const closeNavAndSetState = () => {
    if (refNavMobile.current && refHamburger.current && !isAnimating.current) {
      isAnimating.current = true;

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
          onStart: () => hideNavigation(refNav),
          onComplete: () => {
            isAnimating.current = false;
            setIsMobileNavOpen(false);
          },
        });
    }
  };

  const closeNavAndGoTo = (id: string) => {
    closeNavAndSetState();
    goTo(id);
  };

  const goTo = (id: string) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const anchor = document.getElementById(id);
      const posTop = anchor ? anchor.offsetTop : 0;
      gsap.registerPlugin(ScrollToPlugin);

      gsap.to(window, {
        scrollTo: {
          y: posTop,
        },
        ease: 'power3.out',
        delay: .2,
        duration: .8,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== `undefined` && !isAnimating.current && !isMobileNavOpen) {
      showOrHideNavigationDependingOnScrollDirection(refNav, scrollDirection);
      return () => {
        gsap.killTweensOf(refNav.current);
      };
    }
  }, [scrollDirection, refNav.current]);

  useEffect(() => {
    if (refNavMobile.current) {
      gsap.set(refNavMobile.current, {
        autoAlpha: 0,
      });
    }
  }, []);

  return (
    <>
      <NavMobile refWrapper={refNavMobile} navigationContent={navigationContent} closeNavAndGoTo={closeNavAndGoTo} />
      <nav className={s.navigation} ref={refNav}>
        <div className={s.navigation__logo}>
          <AgatBHP className={s.navigation__logoSvg} />
        </div>

        <NavItem text={navigationContent.start} onClick={() => closeNavAndGoTo('start')} isDesktop />
        <NavItem text={navigationContent.about} onClick={() => closeNavAndGoTo('about')} isDesktop />
        <NavItem text={navigationContent.offer} onClick={() => closeNavAndGoTo('offer')} isDesktop />
        <NavItem text={navigationContent.contact} onClick={() => closeNavAndGoTo('contact')} isDesktop />

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
