import React, { FC } from 'react';
import { FixedObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Start } from 'components/+start/Start.component';
import { Collaboration } from '../components/collaboration/Collaboration.component';

interface IHome {
  data: {
    backgroundStart: {
      childImageSharp: {
        fixed: FixedObject
      }
    }
    backgroundCollab: {
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
      backgroundCollab,
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
      />
    </>
  );
};

export default Home;

export const query = graphql`
query {
  backgroundStart: file(name: {eq: "background-start"}) {
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
}
`;
