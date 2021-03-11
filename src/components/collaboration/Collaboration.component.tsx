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
  const refCollab = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refRTL.current && refLTR.current && refCollab.current) {
      let rtlWidth = 0;
      let ltrWidth = 0;

      rtl.forEach(element => {
        rtlWidth += element.childImageSharp.fixed.width;
      });

      ltr.forEach(element => {
        ltrWidth += element.childImageSharp.fixed.width;
      });
      
      gsap.registerPlugin(ScrollTrigger);


    }
  }, []);
  return (
    <section className={s.collaboration} ref={refCollab} id={'collaboration'}>
      <SectionHeader content={header} />

      <div className={s.collaboration__wrapper}>
        <div className={s.collaboration__rtlWrapper}>
          <div className={s.collaboration__rtl} ref={refRTL}>

          </div>
        </div>
        <div className={s.collaboration__ltlWrapper} ref={refLTR}>
          <div className={s.collaboration__ltr}>

          </div>
        </div>
      </div>

    </section>
  );
};
