import React, { FC } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import AgatBHP from 'assets/svg/AgatBHP-logo.svg';

import s from './Start.module.scss';


interface IStart {
  background: FixedObject;
}

export const Start: FC<IStart> = ({ background }) => {
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
          <AgatBHP className={s.start__logoSvg}/>
        </div>
      </div>
    </div>
  );
};
