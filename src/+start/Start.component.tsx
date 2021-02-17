import React, { FC } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import { StartData } from '../types';

import AgatBHP from 'assets/svg/AgatBHP-logo.svg';

import s from './Start.module.scss';


interface IStart {
  background: FixedObject;
  content: StartData;
}

export const Start: FC<IStart> = ({ background, content }) => {
  return (
    <div className={s.start}>
      <div className={s.start__background}>
        <GatsbyImage
          fixed={background}
          className={s.start__backgroundImage}
        />
        <div className={s.start__backgroundOverlay} />
      </div>

      <div className={s.start__welcome}>
        <div className={s.start__logo}>
          <AgatBHP className={s.start__logoSvg} />
        </div>
        <h1 className={s.start__title}>{content.firstLine}</h1>
        <h2 className={s.start__title}>{content.secondLine}</h2>
      </div>
    </div>
  );
};
