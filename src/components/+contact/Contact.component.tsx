import React, { FC } from 'react';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import Hex from 'assets/svg/contact-background.svg';
import Mail from 'assets/svg/mail.svg';
import Phone from 'assets/svg/phone-call.svg';

import s from './Contact.module.scss';

interface IContact {
  header: string
}

export const Contact: FC<IContact> = ({ header }) => {
  return (
    <div className={s.contact}>
      <SectionHeader content={header} />
      <div className={s.contact__background}>
        <Hex className={s.contact__backgroundSvg} />
      </div>
      <div className={s.contact__overlay} />

      <div className={s.contact__content}>
        <div className={s.contact__info}>
          <div className={s.contact__titleWrapper}>
            <h3 className={s.contact__title}>{header}</h3>
          </div>
          
          <a href={'#'} className={s.contact__group}>
            <div className={s.contact__icon}>
              <Mail className={s.contact__iconSvg} />
            </div>
            <div className={s.contact__target}>
              agat.bhp@gmail.com
            </div>
          </a>

          <a href={'#'} className={s.contact__group}>
            <div className={s.contact__icon}>
              <Phone className={s.contact__iconSvg} />
            </div>
            <div className={s.contact__target}>
              +48 728 329 803
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};
