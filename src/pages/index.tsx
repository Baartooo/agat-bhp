import React, { FC } from 'react';
import { FixedObject, FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Start } from 'components/+start/Start.component';
import { Collaboration } from 'components/collaboration/Collaboration.component';

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
  }
}

const Home: FC<IHome> = (props) => {
  const {
    data: {
      backgroundStart,
      backgroundCollab,
      higher,
      termoRex,
      investSteel,
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
    collab: {
      background: backgroundCollab.childImageSharp.fixed,
      title: 'zaufali nam między innymi',
      logos: [
        {
          ...investSteel,
          alt: 'Logo InvestSteel',
        },
        {
          ...termoRex,
          alt: 'Logo TermoRex',
        },
        {
          ...higher,
          alt: 'Logo Higher',
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
      <Collaboration
        background={content.collab.background}
        title={content.collab.title}
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
  backgroundCollab: file(name: {eq: "siersza"}) {
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
}
`;
