import React, { FC } from 'react';
import { Link } from 'gatsby';

import AgatBHP from 'assets/svg/AgatBHP-logo-cut.svg';

import s from './NotFound.module.scss';

export const NotFound: FC = () => (
  <div className={s.notFound}>

    <div className={s.notFound__wrapper}>
      <Link to={'/'}>
        <div className={s.notFound__logo}>
          <AgatBHP className={s.notFound__logoSvg} />
        </div>
      </Link>

      <p className={s.notFound__content}>
        Nie znaleziono strony, której szukasz.<br />
        Zapraszamy do <Link to={'/'} className={s.notFound__link}>Strony Głównej</Link>
      </p>
    </div>

  </div>
);
