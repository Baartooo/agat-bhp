import { useEffect, useState } from 'react';
import { ScrollDirection } from 'shared/helpers/enums.helper';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection | null>(null);
  const [prevOffset, setPrevOffset] = useState<number>(0);
  const toggleScrollDirection = () => {
    const scrollY = window.scrollY;
    if (scrollY === 0) {
      setScrollDirection(null);
    }
    if (scrollY > prevOffset) {
      setScrollDirection(ScrollDirection.down);
    } else if (scrollY < prevOffset) {
      setScrollDirection(ScrollDirection.up);
    }
    setPrevOffset(scrollY);
  };
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', toggleScrollDirection);
    }
    return () => {
      if (typeof window !== `undefined`) {
        window.removeEventListener('scroll', toggleScrollDirection);
      }
    };
  });
  return scrollDirection;
};
