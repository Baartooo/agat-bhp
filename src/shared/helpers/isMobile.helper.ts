import { IWindowSize } from 'shared/hooks/use-window-size';
import { MinBreakpoint } from './enums.helper';

export const isMobile = (windowSize: IWindowSize, minBreakpoint: MinBreakpoint): boolean => {
  if (windowSize.width) {
    return windowSize.width < minBreakpoint;
  } else {
    return false;
  }
};
