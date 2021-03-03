import React, { FC } from 'react';
import GatsbyImage, { FixedObject } from 'gatsby-image';

import { SectionHeader } from 'shared/section-header/SectionHeader.component';

import s from './About.module.scss';

interface IAbout {
  background: FixedObject;
  header: string;
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
            objectPosition: '40% 50%',
          }}
        />
        <div className={s.about__backgroundOverlay} />
      </div>
      <div className={s.about__content}>

        <div className={s.about__explanation}>
          <h2 className={s.about__title}>Kim jesteśmy</h2>
          <p className={s.about__paragraph}>
            Zajmujemy się <span className={s.about__bold}>obsługą firm pod względem BHP, prowadzeniem szkoleń BHP i ochroną przeciwpożarową.</span> Dysponujemy
            profesjonalną, wykształconą kadrą, posiadającą <span className={s.about__bold}>odpowiednie kwalifikacje i uprawnienia</span>,
            co gwarantuje <span className={s.about__bold}>sumienne i profesjonalne wykonanie usługi</span>. Zajmujemy się również
            obsługą branży budowlanej.
          </p>
          <p className={s.about__paragraph}>
            Jesteśmy zaangażowani w działania na rzecz <span className={s.about__bold}>poprawy bezpieczeństwa pracy</span>.
          </p>
          <p className={s.about__paragraph}>
            Naszym celem jest <span className={s.about__bold}>promowanie najlepszych praktyk w zakresie bezpieczeństwa i ochrony pracy</span>,
            w tym
            inspirowanie
            pracodawców do tworzenia <span className={s.about__bold}>bezpiecznych i ergonomicznych miejsc pracy</span>.
          </p>
        </div>

      </div>


    </div>
  );
};
