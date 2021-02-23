import React, { FC } from 'react';
import { FixedObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Start } from '../+start/Start.component';

interface IHome {
  data: {
    backgroundStart: {
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
    },
  } = props;

  const content = {
    start: {
      firstLine: 'kompleksowa obsługa bhp i ppoż',
      secondLine: 'bezpieczeństwo jest w twoich rękach!',
    },
    navigation: {
      start: 'start',
      about: 'o nas',
      offer: 'oferta',
      contact: 'kontakt',
    },
  };

  return (
    <>
      <Start
        content={content.start}
        background={backgroundStart.childImageSharp.fixed}
        navigationContent={content.navigation}
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
}
`;
