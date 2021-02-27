import React, { FC } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import s from './Collaboration.module.scss';

interface ICollaboration {
  background: FixedObject;
}

export const Collaboration: FC<ICollaboration> = ({ background }) => {
  return (
    <div className={s.collaboration}>
      <div className={s.collaboration__background}>
        <GatsbyImage
          fixed={background}
          className={s.collaboration__backgroundImage}
        />
        <div className={s.collaboration__backgroundOverlay} />
      </div>
    </div>
  );
};
