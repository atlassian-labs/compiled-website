import { useEffect } from 'react';

export const PageTitle = ({ title }: { title?: string }) => {
  useEffect(() => {
    document.title = `${title || 'Docs'} - Compiled`;
  }, [title]);
  return null;
};
