import React, { FC } from 'react';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import Underline from 'assets/svg/underline.svg';

import s from './Offer.module.scss';

interface IOffer {
  header: string;
  title: string
  osh: {
    title: string,
    content: JSX.Element
  }
  online: {
    title: string,
    content: JSX.Element
  }
  firefighting: {
    title: string,
    content: JSX.Element
  }
  firstAid: {
    title: string,
    content: JSX.Element
  }

}

export const Offer: FC<IOffer> = ({ header, title, osh, online, firefighting, firstAid }) => {
  return (
    <div className={s.offer} id={'offer'}>
      <SectionHeader content={header} />
      <div className={s.offer__wrapper}>
        <h2 className={s.offer__title}>
          {title}
          <div className={s.offer__underline}>
            <Underline className={s.offer__underlineSvg} />
          </div>
        </h2>
        <div className={s.offer__content}>
          <div className={s.offer__row}>
            <div className={s.offer__segment}>
              <p className={s.offer__text}>
                {osh.content}
              </p>
            </div>
            <div className={s.offer__segment}>
              <p className={s.offer__text}>
                {online.content}
              </p>
            </div>
          </div>
          <div className={s.offer__row}>
            <div className={s.offer__segment}>
              <p className={s.offer__text}>
                {firefighting.content}
              </p>
            </div>
            <div className={s.offer__segment}>
              <p className={s.offer__text}>
                {firstAid.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
