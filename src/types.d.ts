import { FixedObject } from 'gatsby-image';

export type StartContent = {
  firstLine: string,
  secondLine: string
}

export type NavigationContent = {
  start: string;
  about: string;
  offer: string;
  contact: string;
}

export type LogoData = {
  name: string;
  childImageSharp: {
    fixed: FixedObject
  }
  url: string;
  alt: string;
}
