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
  logos: LogoData[]
  header: string;
}

export const Collaboration: FC<ICollaboration> = ({ background, header, logos }) => {
  const refLogosWrapper = useRef<HTMLDivElement>(null);
  const refCollab = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refLogosWrapper.current && refCollab.current) {
      gsap.registerPlugin(ScrollTrigger);

      const allLogos = refLogosWrapper.current.children;

      gsap.set(allLogos, {
        autoAlpha: 0,
        xPercent: (index) => {
          if (index % 2 === 0) {
            return -20;
          } else {
            return 20;
          }
        },
      });

      gsap.to(allLogos, {
        autoAlpha: 1,
        xPercent: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: refCollab.current,
          start: '40% 100%',
          once: true,
        },
        stagger: .5,

      });

    }
  }, [refLogosWrapper.current, refCollab.current]);

  return (
    <section className={s.collaboration} ref={refCollab} id={'collaboration'}>
      <SectionHeader content={header} />
      <div className={s.collaboration__background}>
        <GatsbyImage
          fixed={background.img}
          alt={background.alt}
          className={s.collaboration__backgroundImage}
          imgStyle={{
            objectPosition: '48% 50%',
          }}
        />
        <div className={s.collaboration__backgroundOverlay} />
      </div>

      <div className={s.collaboration__logos} ref={refLogosWrapper}>
        {
          logos.map((logo) => (
            <a href={logo.url} className={s.collaboration__logo} key={logo.name} target={'_blank'}
               rel={'noopener noreferrer'}>
              <GatsbyImage fluid={logo.childImageSharp.fluid} className={s.collaboration__logoImg} alt={logo.alt} />
            </a>
          ))
        }
      </div>

    </section>
  );
};
