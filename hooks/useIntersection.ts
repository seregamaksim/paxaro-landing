import { useState, useEffect } from 'react';
import { useSetActiveClassMenu } from './useSetActiveClassMenu';

export function useIntersection(ref: any, id: string) {
  const [isIntersecting, setIntersecting] = useState(false);

  useSetActiveClassMenu(isIntersecting, id);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
