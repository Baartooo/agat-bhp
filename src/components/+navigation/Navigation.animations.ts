import { RefObject } from 'react';
import gsap from 'gsap';

export const showNavigation = (refNavigation: RefObject<HTMLDivElement>) => {
  if (refNavigation.current !== null) {
    gsap.to(refNavigation.current, {
      yPercent: 0,
      autoAlpha: 1,
      duration: .3,
    });
  }
};

export const hideNavigation = (refNavigation: RefObject<HTMLDivElement>) => {
  if (refNavigation.current !== null) {
    gsap.to(refNavigation.current, {
      yPercent: -100,
      duration: .3,
    });
  }
};
