import { useCallback, useEffect, useState } from 'react';

function useDocumentScroll() {
  const [y, setY] = useState(0);
  const [isDownDirection, setIsDownDirection] = useState(false);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log('scrolling up');
        setIsDownDirection(false);
      } else if (y < window.scrollY) {
        console.log('scrolling down');
        setIsDownDirection(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return isDownDirection;
}

export default useDocumentScroll;
