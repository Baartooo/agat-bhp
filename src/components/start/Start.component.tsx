import React, { FC, useEffect, useRef } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import gsap from 'gsap';

import { NavigationContent, StartContent } from 'types';

import { Navigation } from '../+navigation/Navigation.component';

import AgatBHP from 'assets/svg/AgatBHP-logo.svg';

import s from './Start.module.scss';


interface IStart {
  background: FixedObject;
  content: StartContent;
  navigationContent: NavigationContent;
}

export const Start: FC<IStart> = ({ background, content, navigationContent }) => {
  const refLogo = useRef<HTMLDivElement>(null);
  const refFirstLine = useRef<HTMLDivElement>(null);
  const refSecondLine = useRef<HTMLDivElement>(null);
  const refNav = useRef<HTMLDivElement>(null);
  let tl = gsap.timeline();

  useEffect(() => {
    if (refLogo.current && refFirstLine.current && refSecondLine.current && refNav.current) {
      const path = document.querySelector('#logoAnimatableCircle');
      tl = gsap.timeline();
      tl
        .set(refLogo.current, {
          autoAlpha: 0,
          yPercent: 50,
        })
        .set([refFirstLine.current, refSecondLine.current], { autoAlpha: 0 })
        .set(path, { transformOrigin: '50% 50%', autoAlpha: 0 })
        .set(refNav.current, { autoAlpha: 0 })
        .to(refLogo.current, {
          delay: 1.1,
          autoAlpha: 1,
          duration: .9,
          ease: 'power2.out',
        })
        .to(refLogo.current, {
          yPercent: 0,
          duration: 1.5,
          ease: 'power2.inOut',
        })
        .to(path, {
          autoAlpha: 1,
          rotate: 360,
          duration: 1.5,
          ease: 'power2.out',
        }, '<')
        .to([refFirstLine.current, refSecondLine.current], {
          autoAlpha: 1,
          duration: 1,
          stagger: .2,
          ease: 'power2.out',
        })
        .to(refNav.current, {
          autoAlpha: 1,
          yPercent: 0,
        }, '<+0.5');

      return () => {
        tl.kill();
      };
    }

  }, [refLogo.current, refFirstLine.current, refSecondLine.current, refNav.current]);

  return (
    <>
      <Navigation refNav={refNav} navigationContent={navigationContent} />
      <section className={s.start} id={'start'}>
        <div className={s.start__background}>
          <GatsbyImage
            fixed={background}
            className={s.start__backgroundImage}
          />
          <div className={s.start__backgroundOverlay} />
        </div>

        <div className={s.start__welcome}>
          <div className={s.start__logo} ref={refLogo}>
            <AgatBHP className={s.start__logoSvg} />
          </div>
          <h1 className={s.start__title} ref={refFirstLine}>{content.firstLine}</h1>
          <h1 className={s.start__title} ref={refSecondLine}>{content.secondLine}</h1>
        </div>
      </section>
    </>
  );
};
