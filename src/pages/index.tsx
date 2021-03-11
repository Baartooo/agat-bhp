import React, { FC } from 'react';
import { FixedObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Start } from 'components/start/Start.component';
import { About } from '../components/+about/About.component';
import { Offer } from '../components/+offer/Offer.component';
import { Contact } from '../components/+contact/Contact.component';

interface IHome {
  data: {
    backgroundStart: {
      name: string;
      childImageSharp: {
        fixed: FixedObject
      }
    }
    backgroundAbout: {
      name: string;
      childImageSharp: {
        fixed: FixedObject
      }
    }
  }
}

const Home: FC<IHome> = (props) => {
  const {
    data: {
      backgroundStart,
      backgroundAbout,
    },
  } = props;

  const content = {
    start: {
      firstLine: 'kompleksowa obsługa bhp i ppoż',
      secondLine: 'bezpieczeństwo jest w twoich rękach!',
      background: {
        img: backgroundStart.childImageSharp.fixed,
        alt: 'miasto widoczne z góry',
      },
    },
    navigation: {
      start: 'start',
      about: 'o nas',
      offer: 'oferta',
      contact: 'kontakt',
    },
    about: {
      background: {
        img: backgroundAbout.childImageSharp.fixed,
        alt: 'kopara górnicza',
      },
      header: 'o nas',
    },
    offer: {
      header: 'oferta',
      title: 'oferujemy szeroką gamę usług w zakresie bhp i ppoż',
      osh: {
        title: 'BHP',
        points: [
          'aspekty prawne i stały nadzór w ramach zadań służb BHP',
          'szkolenia BHP wstępne i okresowe pracowników',
          'ocena i dokumentacja ryzyka zawodowego na stanowiskach pracy',
          'sporządzanie dokumentacji powypadkowej',
          'organizacja pomiarów czynników szkodliwych i uciążliwych',
          'przygotowanie procedur BHP - audyt ISO 45001',
        ],
      },
      online: {
        title: 'online',
        points: [
          'szkolenia BHP online w języku polskim, angielskim i francuskim',
          'szkolenie można zrealizować w dogodnym momencie',
          'forma szkolenia nie zaburza harmonogramu pracy',
          'duża oszczędność czasu pracowników - bez dojazdów',
          'mniejsze koszty dla pracodawcy niż przypadku szkoleń tradycyjnych',
          'ciekawe materiały oraz lepsze zapamiętywanie przekazywanych treści',
        ],
      },
      firefighting: {
        title: 'PPOŻ',
        points: [
          'szkolenia z ochrony przeciwpożarowej i sprzętu gaśniczego',
          'przeprowadzanie audytów i kontroli stanu ochrony przeciwpożarowej',
          'nadzór nad podręcznym sprzętem gaśniczym',
          'wykonanie instrukcji bezpieczeństwa pożarowego',
          'opracowanie planów ewakuacyjnych',
        ],
      },
      firstAid: {
        title: 'Pierwsza pomoc',
        points: [
          'aspekty prawne pierwszej pomocy',
          'ocena sytuacji i zabezpieczenie miejsca zdarzenia',
          'ocena stanu poszkodowanego i kontrola czynności życiowych',
          'postępowanie z poszkodowanym nieprzytomnym',
          'resuscytacja krążeniowo-oddechowa',
          'omdlenia, atak serca, padaczka',
        ],
      },
    },
    contact: {
      header: 'Kontakt',
      phone: '+48 728 329 803',
      mail: 'agat.bhp@gmail.com',
      www: 'agat-bhp.pl',
      invite: 'Zapraszam do kontaktu i współpracy',
      degrees: 'mgr inż.',
      name: 'Agnieszka Gajos',
      job: 'Główny Specjalista ds. BHP',
    },
  };

  return (
    <>
      <Start
        content={content.start}
        background={content.start.background}
        navigationContent={content.navigation}
      />
      <About
        background={content.about.background}
        header={content.about.header}
      />
      <Offer
        header={content.offer.header}
        title={content.offer.title}
        osh={content.offer.osh}
        online={content.offer.online}
        firefighting={content.offer.firefighting}
        firstAid={content.offer.firstAid}
      />
      <Contact
        header={content.contact.header}
        mail={content.contact.mail}
        phone={content.contact.phone}
        www={content.contact.www}
        invite={content.contact.invite}
        degrees={content.contact.degrees}
        name={content.contact.name}
        job={content.contact.job}
      />
    </>
  );
};

export default Home;

export const query = graphql`
  query GetPhotos {
    backgroundStart: file(name: {eq: "background-start"}) {
      name
      childImageSharp {
        fixed(width: 1920) {
          aspectRatio
          srcWebp
          srcSetWebp
          src
          srcSet
          height
          width
        }
      }
    }
    backgroundAbout: file(name: {eq: "background-about"}) {
      name
      childImageSharp {
        fixed(width: 1920, quality: 100) {
          aspectRatio
          srcWebp
          srcSetWebp
          src
          srcSet
          height
          width
        }
      }
    }
  }
`;
