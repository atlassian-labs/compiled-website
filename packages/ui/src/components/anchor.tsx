import React, {
  createContext,
  useContext,
  useRef,
  useMemo,
  useEffect,
  useCallback,
  useState,
  Ref,
} from 'react';
import '@compiled/core';
import { Heading } from '@compiled/website-ui';
import { colors } from '../utils';

interface AnchorContextData {
  listen: (element: HTMLElement) => void;
  unlisten: (element: HTMLElement) => void;
  selected: string;
}

const AnchorContext = createContext<AnchorContextData>({
  listen: () => {},
  unlisten: () => {},
  selected: '',
});

export const Anchor = ({ children }: { children: string | string[] }) => {
  const context = useContext(AnchorContext);
  const ref = useRef<HTMLElement | null>(null);

  const id = (typeof children === 'string'
    ? [children.trim().split(' ').join('-')]
    : // Somehow children arrays could END with a space.
      children.filter(
        (text, index) => !(index === children.length - 1 && text === ' ')
      )
  )
    .filter((child) => typeof child === 'string')
    .map((child) => child.trim().split(' ').join('-'))
    .join('-')
    .toLowerCase();

  useEffect(() => {
    context.listen(ref.current);

    return () => {
      context.unlisten(ref.current);
    };
  }, [context, id]);

  return (
    <a
      ref={ref as Ref<HTMLAnchorElement>}
      href={`#${id}`}
      id={id}
      css={{
        color: 'currentColor',
        textDecoration: 'none',
        position: 'relative',
        ':before': {
          opacity: 0,
          content: '🔗',
          position: 'absolute',
          left: '-4rem',
          fontSize: '3rem',
          transform: 'translateX(1rem)',
          transition: 'opacity 100ms, transform 100ms',
          paddingRight: '5rem',
          top: 2,
          bottom: 0,
          display: 'flex',
          alignItems: 'flex-end',
        },
        ':hover': {
          ':before': {
            opacity: 1,
            transform: 'none',
          },
        },
      }}>
      {children}
    </a>
  );
};

export const ToAnchor = ({
  children,
  depth,
}: {
  children: string;
  depth: number;
}) => {
  const id = children.trim().split(' ').join('-').toLowerCase();
  const context = useContext(AnchorContext);

  return (
    <Heading style={{ marginLeft: `${depth}rem` }} look="h500">
      <a
        css={{
          color: context.selected === id ? colors.primary : 'currentColor',
          transition: 'color 100ms',
          textDecoration: 'none',
        }}
        href={`#${id}`}>
        {children}
      </a>
    </Heading>
  );
};

export const AnchorProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const observer = useRef<IntersectionObserver>();
  const [selected, setSelected] = useState('');

  const listen = useCallback((element: HTMLElement) => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          let target: Element;

          entries
            .filter((entry) => entry.intersectionRatio >= 1)
            .forEach((entry) => {
              target = entry.target;
            });

          if (target) {
            setSelected(target.id);
          }
        },
        { rootMargin: '0px 0px -60% 0px', threshold: [1] }
      );
    }

    observer.current.observe(element);
  }, []);

  const unlisten = useCallback((element: HTMLElement) => {
    observer.current.unobserve(element);
  }, []);

  const value = useMemo(() => ({ listen, unlisten, selected }), [
    listen,
    unlisten,
    selected,
  ]);

  useEffect(() => {
    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <AnchorContext.Provider value={value}>{children}</AnchorContext.Provider>
  );
};
