import { RefObject } from 'react';

export const isAnyRefNull = (refs: RefObject<HTMLDivElement>[]): boolean => {
  let result = false;

  refs.forEach(ref => {
    if (ref.current === null) {
      result = true;
    }
  });

  return result;
};
