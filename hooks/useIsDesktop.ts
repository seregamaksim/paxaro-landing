import { useEffect, useState } from 'react';

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    window.innerWidth > 900 ? setIsDesktop(true) : setIsDesktop(false);
  }, []);
  return isDesktop;
}
