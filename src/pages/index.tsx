import React, { FC } from 'react';
import { FixedObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Start } from '../+start/Start.component';
import { Navigation } from '../+navigation/Navigation.component';

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
  };

  return (
    <>
      <Navigation />
      <Start content={content.start} background={backgroundStart.childImageSharp.fixed} />
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
