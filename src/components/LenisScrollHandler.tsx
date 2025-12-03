import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLenisContext } from '../contexts/LenisContext';

export const LenisScrollHandler = () => {
  const { lenis } = useLenisContext();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

  return null;
};

