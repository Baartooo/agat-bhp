import React, { FC, useEffect, useRef } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import { gsap } from 'gsap/all';

import { LogoData } from 'types';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import s from './Collaboration.module.scss';

interface ICollaboration {
  background: FixedObject;
  logos: LogoData[]
  header: string;
}

export const Collaboration: FC<ICollaboration> = ({ background, header, logos }) => {
  const refLogosWrapper = useRef<HTMLDivElement>(null);
  const refCollab = useRef<HTMLDivElement>(null);
  

  return (
    <div className={s.collaboration} ref={refCollab} id={'collaboration'}>
      <SectionHeader content={header} />
      {/*<div className={s.collaboration__background}>*/}
      {/*  <GatsbyImage*/}
      {/*    fixed={background}*/}
      {/*    className={s.collaboration__backgroundImage}*/}
      {/*    imgStyle={{*/}
      {/*      objectPosition: '35% 50%',*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <div className={s.collaboration__backgroundOverlay} />*/}
      {/*</div>*/}

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
