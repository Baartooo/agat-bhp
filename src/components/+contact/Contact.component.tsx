import React, { FC } from 'react';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import Hex from 'assets/svg/contact-background.svg';
import Mail from 'assets/svg/mail.svg';
import Phone from 'assets/svg/phone-call.svg';
import WWW from 'assets/svg/www.svg';

import s from './Contact.module.scss';

interface IContact {
  header: string;
  mail: string;
  phone: string;
  www: string;
  invite: string;
  degrees: string;
  name: string;
  job: string;
}

export const Contact: FC<IContact> = ({ header, mail, phone, www, invite, degrees, name, job }) => {
  return (
    <section className={s.contact} id={'contact'}>
      <SectionHeader content={header} />
      <div className={s.contact__background}>
        <Hex className={s.contact__backgroundSvg} />
      </div>
      <div className={s.contact__overlay} />

      <div className={s.contact__invitation}>
        <p className={s.contact__invitationContent}>{invite}</p>
        <div className={s.contact__invitationName}>
          <span className={s.contact__invitationDegrees}>{degrees}&nbsp;</span>
          <span className={s.contact__invitationIdentity}>{name}</span>
        </div>
        <div className={s.contact__invitationJob}>{job}</div>
      </div>

      <div className={s.contact__content}>
        <div className={s.contact__info}>
          <div className={s.contact__titleWrapper}>
            <h3 className={s.contact__title}>{header}</h3>
          </div>

          <a href={`mailto:${mail}`} className={s.contact__group}>
            <div className={s.contact__icon}>
              <Mail className={s.contact__iconSvg} />
            </div>
            <div className={s.contact__target}>
              {mail}
            </div>
          </a>

          <a href={`tel:${phone}`} className={s.contact__group}>
            <div className={s.contact__icon}>
              <Phone className={s.contact__iconSvg} />
            </div>
            <div className={s.contact__target}>
              {phone}
            </div>
          </a>

          <a href={`https://${www}`} target={'_blank'} className={s.contact__group}>
            <div className={s.contact__icon}>
              <WWW className={s.contact__iconSvg} />
            </div>
            <div className={s.contact__target}>
              {www}
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
