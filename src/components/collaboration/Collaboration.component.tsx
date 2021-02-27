import React, { FC } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import s from './Collaboration.module.scss';
import { SectionHeader } from '../../shared/section-header/SectionHeader.component';

interface ICollaboration {
  background: FixedObject;
  title: string;
}

export const Collaboration: FC<ICollaboration> = ({ background, title }) => {
  return (
    <div className={s.collaboration}>
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
    </div>
  );
};
