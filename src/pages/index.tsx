import React, { FC } from 'react';
import { FixedObject, FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Start } from 'components/+start/Start.component';
import { Collaboration } from 'components/collaboration/Collaboration.component';
import { About } from '../components/+about/About.component';

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
          url: '#',
          alt: 'Logo Higher',
        },
        {
          ...investSteel,
          url: '#',
          alt: 'Logo InvestSteel',
        },
        {
          ...termoRex,
          url: '#',
          alt: 'Logo TermoRex',
        },
        {
          ...weddingStore,
          url: '#',
          alt: 'Logo Wedding Store',
        },
        {
          ...imprezoweZakupy,
          url: '#',
          alt: 'Logo Imprezowe Zakupy',
        },
        {
          ...odziezDlaMedyka,
          url: '#',
          alt: 'Logo Odzież Dla Medyka',
        },
      ],
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
