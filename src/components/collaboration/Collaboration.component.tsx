import React, { FC, useEffect, useRef } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import { gsap, ScrollTrigger } from 'gsap/all';

import { LogoData } from 'types';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import s from './Collaboration.module.scss';

interface ICollaboration {
  background: {
    img: FixedObject,
    alt: string,
  };
  rtl: LogoData[]
  ltr: LogoData[]
  header: string;
}

export const Collaboration: FC<ICollaboration> = ({ header, rtl, ltr }) => {
  const refRTL = useRef<HTMLDivElement>(null);
  const refLTR = useRef<HTMLDivElement>(null);
  const refWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refRTL.current && refLTR.current && refWrapper.current) {
      let rtlWidth = 0;
      let ltrWidth = 0;
      const MARGIN = 100;

      rtl.forEach(element => {
        rtlWidth += element.childImageSharp.fixed.width + 20;
      });

      ltr.forEach(element => {
        ltrWidth += element.childImageSharp.fixed.width + MARGIN;
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.set(refRTL.current, { width: rtlWidth });
      gsap.set(refLTR.current, { width: ltrWidth });

      const tl = gsap.timeline({
        scrollTrigger: {
          markers: true,
          trigger: refWrapper.current,
          scrub: 1,
          start: '0 80%',
          end: '100% 0',
        },
      })
        .to(refRTL.current, {
          x: -refWrapper.current.clientWidth - rtlWidth,
        })
        .to(refLTR.current, {
          x: refWrapper.current.clientWidth + ltrWidth,
        }, '<');

      return () => {
        tl.kill();
      };
    }
  }, []);
  return (
    <section className={s.collaboration} id={'collaboration'}>
      <SectionHeader content={header} />

      <div className={s.collaboration__wrapper} ref={refWrapper}>
        <div className={s.collaboration__rtlWrapper}>
          <div className={s.collaboration__rtl} ref={refRTL}>
            {
              rtl.map((logo, index) => (
                <div className={s.collaboration__logo} key={index}>
                  <GatsbyImage fixed={logo.childImageSharp.fixed} className={s.collaboration__logoImg} />
                </div>
              ))
            }
          </div>
        </div>
        <div className={s.collaboration__ltlWrapper}>
          <div className={s.collaboration__ltr} ref={refLTR}>
            {
              ltr.map((logo, index) => (
                <div className={s.collaboration__logo} key={index}>
                  <GatsbyImage fixed={logo.childImageSharp.fixed} className={s.collaboration__logoImg} />
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  );
};
