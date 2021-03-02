import React, { FC } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import s from './About.module.scss';

interface IAbout {
  background: FixedObject;
  header: string
}

export const About: FC<IAbout> = ({ background, header }) => {
  return (
    <div className={s.about} id={'about'}>
      <SectionHeader content={header} />
      <div className={s.about__background}>
        <GatsbyImage
          fixed={background}
          className={s.about__backgroundImage}
          imgStyle={{
            objectPosition: '45% 50%',
          }}
        />
        <div className={s.about__backgroundOverlay} />
      </div>


    </div>
  );
};
