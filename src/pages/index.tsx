import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Start } from '../+start/Start.component';

const Home: FC = (props) => {
  const {
    data: {
      backgroundStart,
    },
  } = props;

  return (
    <>
      <Start background={backgroundStart.childImageSharp.fixed} />
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
