import { useEffect } from 'react';
import { titleCase } from '../utils/string';

export const PageTitle = ({ title }: { title?: string }) => {
  useEffect(() => {
    document.title = `${titleCase(title || 'Docs')} - Compiled`;
  }, [title]);
  return null;
};
