import { useEffect } from 'react';

export const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};
