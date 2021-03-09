import React, { FC, useEffect, useRef } from 'react';

import { gsap, ScrollTrigger } from 'gsap/all';

import { useWindowSize } from 'shared/hooks/use-window-size';
import { isMobile } from 'shared/helpers/isMobile.helper';
import { MinBreakpoint } from 'shared/helpers/enums.helper';
import { isAnyRefNull } from 'shared/helpers/refNulls.helper';

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
  const refTrigger = useRef<HTMLDivElement>(null);

  // both
  const refLineOneTop = useRef<HTMLDivElement>(null);
  const refLineOneBottom = useRef<HTMLDivElement>(null);
  const refLineOneLeft = useRef<HTMLDivElement>(null);
  const refLineOneRight = useRef<HTMLDivElement>(null);
  const refLineThreeBottom = useRef<HTMLDivElement>(null);

  // desktop
  const refLineTwoRight = useRef<HTMLDivElement>(null);

  // mobile
  const refLineThreeTop = useRef<HTMLDivElement>(null);
  const refLineFourBottom = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();
  const isMobileResolution = isMobile(windowSize, MinBreakpoint.desktop);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isMobileResolution) {
      if (!isAnyRefNull([refLineOneTop, refLineOneBottom, refLineOneLeft, refLineOneRight, refLineThreeBottom, refLineThreeTop, refLineFourBottom])) {
        gsap.set(refLineOneTop.current, { xPercent: -10, scaleX: 0 });
        gsap.set(refLineOneBottom.current, { xPercent: -6, scaleX: 0 });
        gsap.set(refLineThreeTop.current, { xPercent: -2, scaleX: 0 });
        gsap.set(refLineThreeBottom.current, { xPercent: 2, scaleX: 0 });
        gsap.set(refLineFourBottom.current, { xPercent: 6, scaleX: 0 });

        gsap.set(refLineOneLeft.current, { yPercent: -2, scaleY: 0, height: '420%' });
        gsap.set(refLineOneRight.current, { yPercent: 2, scaleY: 0, height: '410%' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: refTrigger.current,
            end: '71% 0',
            once: true,
            // scrub: 1, // option 2
          },
        });

        tl.to([refLineOneTop.current, refLineOneBottom.current, refLineThreeTop.current, refLineThreeBottom.current, refLineFourBottom.current], {
          scaleX: 1,
          stagger: 1,
          ease: 'none',
          duration: 8, // option 1
        });

        tl.to([refLineOneLeft.current, refLineOneRight.current], {
          scaleY: 1,
          stagger: .1,
          ease: 'none',
          duration: 8, // option 1
        }, '<+1');


        return () => {
          tl.kill();
        };
      }

    } else if (isMobileResolution !== null) {
      if (!isAnyRefNull([refLineOneTop, refLineOneBottom, refLineOneLeft, refLineOneRight, refLineTwoRight, refLineThreeBottom, refTrigger])) {
        gsap.set(refLineOneTop.current, { xPercent: -10, scaleX: 0 });
        gsap.set(refLineOneBottom.current, { xPercent: -5, scaleX: 0 });
        gsap.set(refLineThreeBottom.current, { xPercent: 5, scaleX: 0 });

        gsap.set(refLineOneLeft.current, { yPercent: -10, scaleY: 0 });
        gsap.set(refLineOneRight.current, { yPercent: -5, scaleY: 0 });
        gsap.set(refLineTwoRight.current, { yPercent: 10, scaleY: 0, height: '200%' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: refTrigger.current,
            start: '0% 90%',
            end: '50% 0%',
            once: true,
            // scrub: 1, // option 2
          },
        });

        tl
          .to([refLineOneTop.current, refLineOneBottom.current, refLineThreeBottom.current], {
            scaleX: 1,
            stagger: .7,
            ease: 'none',
            duration: 8, // option 1
          })
          .to([refLineOneLeft.current, refLineOneRight.current, refLineTwoRight.current], {
            scaleY: 1,
            stagger: .7,
            ease: 'none',
            duration: 8, // option 1
          }, '<+1');

        return () => {
          tl.kill();
        };
      }

    }

  }, [isMobileResolution]);

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
        <div className={s.offer__content} ref={refTrigger}>
          <div className={s.offer__row}>
            <div className={s.offer__segment}>

              <div className={s.offer__lineTop} ref={refLineOneTop} />
              <div className={s.offer__lineBottom} ref={refLineOneBottom} />
              <div className={s.offer__lineLeft} ref={refLineOneLeft} />
              <div className={s.offer__lineRight} ref={refLineOneRight} />

              <div className={s.offer__number}>01.</div>
              <p className={s.offer__text}>
                {osh.content}
              </p>
            </div>
            <div className={s.offer__segment}>

              {!isMobileResolution && <div className={s.offer__lineRight} ref={refLineTwoRight} />}

              <div className={s.offer__number}>02.</div>
              <p className={s.offer__text}>
                {online.content}
              </p>
            </div>
          </div>
          <div className={s.offer__row}>
            <div className={s.offer__segment}>

              {isMobileResolution && <div className={s.offer__lineTop} ref={refLineThreeTop} />}
              <div className={s.offer__lineBottom} ref={refLineThreeBottom} />

              <div className={s.offer__number}>03.</div>
              <p className={s.offer__text}>
                {firefighting.content}
              </p>
            </div>
            <div className={s.offer__segment}>

              {isMobileResolution && <div className={s.offer__lineBottom} ref={refLineFourBottom} />}

              <div className={s.offer__number}>04.</div>
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
