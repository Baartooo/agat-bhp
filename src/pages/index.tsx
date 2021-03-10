import React, { FC } from 'react';
import { FixedObject, FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Start } from 'components/start/Start.component';
import { Collaboration } from 'components/collaboration/Collaboration.component';
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
    backgroundCollab: {
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
    higher: {
      name: string;
      childImageSharp: {
        fluid: FluidObject
      }
    }
    termoRex: {
      name: string;
      childImageSharp: {
        fluid: FluidObject
      }
    }
    investSteel: {
      name: string;
      childImageSharp: {
        fluid: FluidObject
      }
    }
    imprezoweZakupy: {
      name: string;
      childImageSharp: {
        fluid: FluidObject
      }
    }
    odziezDlaMedyka: {
      name: string;
      childImageSharp: {
        fluid: FluidObject
      }
    }
    weddingStore: {
      name: string;
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const Home: FC<IHome> = (props) => {
  const {
    data: {
      backgroundStart,
      backgroundCollab,
      backgroundAbout,
      higher,
      termoRex,
      investSteel,
      weddingStore,
      odziezDlaMedyka,
      imprezoweZakupy,
    },
  } = props;

  const content = {
    start: {
      firstLine: 'kompleksowa obsługa bhp i ppoż',
      secondLine: 'bezpieczeństwo jest w twoich rękach!',
      background: backgroundStart.childImageSharp.fixed,
    },
    navigation: {
      start: 'start',
      about: 'o nas',
      offer: 'oferta',
      contact: 'kontakt',
    },
    about: {
      background: backgroundAbout.childImageSharp.fixed,
      header: 'o nas',
    },
    collab: {
      background: backgroundCollab.childImageSharp.fixed,
      header: 'zaufali nam między innymi',
      logos: [
        {
          ...higher,
          url: 'http://higher.com.pl',
          alt: 'Logo Higher',
        },
        {
          ...investSteel,
          url: 'http://investsteel.pl/wspolpraca/',
          alt: 'Logo InvestSteel',
        },
        {
          ...termoRex,
          url: 'https://termo-rex.pl/',
          alt: 'Logo TermoRex',
        },
        {
          ...weddingStore,
          url: 'https://weddingstore.pl/',
          alt: 'Logo Wedding Store',
        },
        {
          ...imprezoweZakupy,
          url: 'https://imprezowezakupy.pl/',
          alt: 'Logo Imprezowe Zakupy',
        },
        {
          ...odziezDlaMedyka,
          url: 'https://odziezdlamedyka.pl/',
          alt: 'Logo Odzież Dla Medyka',
        },
      ],
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
          'forma szkolenia nie zaburza harmonogramu pracy danego przedsiębiorstwa',
          'duża oszczędność czasu pracowników - bez dojazdów',
          'mniejsze koszty dla pracodawcy niż przypadku szkoleń tradycyjnych',
          'ciekawe materiały oraz lepsze zapamiętywanie przekazywanych treści',
        ],
      },
      firefighting: {
        title: 'PPOŻ',
        points: [
          'szkolenia z ochrony przeciwpożarowej i użycia podręcznego sprzętu gaśniczego',
          'przeprowadzanie audytów i kontroli stanu ochrony przeciwpożarowej',
          'nadzór nad podręcznym sprzętem gaśniczym',
          'wykonanie instrukcji bezpieczeństwa pożarowego zgodnie z wymogami prawa',
          'opracowanie scenariuszy rozwoju pożarów oraz planów ewakuacyjnych',
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
      phone: '',
      mail: '',
      www: '',
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
      <Collaboration
        background={content.collab.background}
        header={content.collab.header}
        logos={content.collab.logos}
      />
      <Offer
        header={content.offer.header}
        title={content.offer.title}
        osh={content.offer.osh}
        online={content.offer.online}
        firefighting={content.offer.firefighting}
        firstAid={content.offer.firstAid}
      />
      <Contact header={content.contact.header} />
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
  backgroundCollab: file(name: {eq: "team"}) {
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
  higher: file(name: {eq: "higher"}) {
    name
    childImageSharp {
      fluid(quality: 100) {
        src
        srcSet
        base64
        aspectRatio
        sizes
      }
    }
  }
  termoRex: file(name: {eq: "termo-rex"}) {
    name
    childImageSharp {
      fluid(quality: 100) {
        src
        srcSet
        base64
        aspectRatio
        sizes
      }
    }
  }
  investSteel: file(name: {eq: "invest-steel"}) {
    name
    childImageSharp {
      fluid(quality: 100) {
        src
        srcSet
        base64
        aspectRatio
        sizes
      }
    }
  }
  imprezoweZakupy: file(name: {eq: "imprezowe-zakupy"}) {
    name
    childImageSharp {
      fluid(quality: 100) {
        src
        srcSet
        base64
        aspectRatio
        sizes
      }
    }
  }
  odziezDlaMedyka: file(name: {eq: "odziez-dla-medyka"}) {
    name
    childImageSharp {
      fluid(quality: 100) {
        src
        srcSet
        base64
        aspectRatio
        sizes
      }
    }
  }
  weddingStore: file(name: {eq: "wedding-store"}) {
    name
    childImageSharp {
      fluid(quality: 100) {
        src
        srcSet
        base64
        aspectRatio
        sizes
      }
    }
  }
}
`;
