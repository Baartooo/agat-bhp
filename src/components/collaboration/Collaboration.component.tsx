import React, { FC, useEffect, useRef } from 'react';
import GatsbyImage, { FixedObject, FluidObject } from 'gatsby-image';

import { gsap, ScrollTrigger } from 'gsap/all';

import { SectionHeader } from '../../shared/section-header/SectionHeader.component';

import s from './Collaboration.module.scss';

interface ICollaboration {
  background: FixedObject;
  logos: {
    name: string;
    childImageSharp: {
      fluid: FluidObject
    }
  }[]
  title: string;
}

export const Collaboration: FC<ICollaboration> = ({ background, title, logos }) => {
  const refLogosWrapper = useRef<HTMLDivElement>(null);
  const refCollab = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (refLogosWrapper.current && refCollab.current) {
      const logos = refLogosWrapper.current.children;
      gsap.set(logos, {
        autoAlpha: 0,
        xPercent: -3,
      });

      gsap.to(logos, {
        scrollTrigger: {
          trigger: refCollab.current,
          start: '40% 100%',
          once: true,
        },
        autoAlpha: 1,
        xPercent: 0,
        stagger: .5,
      });

    }
  }, []);

  return (
    <div className={s.collaboration} ref={refCollab}>
      <SectionHeader content={title} />
      <div className={s.collaboration__background}>
        <GatsbyImage
          fixed={background}
          className={s.collaboration__backgroundImage}
          imgStyle={{
            objectPosition: '35% 50%',
          }}
        />
        <div className={s.collaboration__backgroundOverlay} />
      </div>
      <div className={s.collaboration__logos} ref={refLogosWrapper}>
        {
          logos.map((logo) => (
            <div className={s.collaboration__logo} key={logo.name}>
              <GatsbyImage fluid={logo.childImageSharp.fluid} className={s.collaboration__logoImg} />
            </div>
          ))
        }
      </div>

    </div>
  );
};
