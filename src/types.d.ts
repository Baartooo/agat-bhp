import { FluidObject } from 'gatsby-image';

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
    fluid: FluidObject
  }
  alt: string;
}
