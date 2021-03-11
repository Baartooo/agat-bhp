import { RefObject } from 'react';

import { hideNavigation, showNavigation } from 'components/+navigation/Navigation.animations';
import { ScrollDirection } from './enums.helper';

export const showOrHideNavigationDependingOnScrollDirection = (refNavigation: RefObject<HTMLDivElement>, scrollDirection: string | null) => {
  if (scrollDirection === ScrollDirection.up) {
    showNavigation(refNavigation);
  } else {
    hideNavigation(refNavigation);
  }
};

