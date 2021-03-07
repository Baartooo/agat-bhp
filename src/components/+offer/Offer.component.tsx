import React, { FC } from 'react';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import Underline from 'assets/svg/underline.svg';

import s from './Offer.module.scss';

interface IOffer {
  header: string;
  title: string
}

export const Offer: FC<IOffer> = ({ header, title }) => {
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
      </div>
    </div>
  );
};
