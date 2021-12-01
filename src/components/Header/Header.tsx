import { FC, useEffect, useState } from 'react';
import { MobileHeader } from './components/MobileHeader';
import { DesktopHeader } from './components/DesktopHeader';
import { throttle } from 'throttle-debounce';

const Header: FC = ({ children }) => {
  const [isMobileHeader, setIsMobileHeader] = useState(true);

  const handleResize = () => {
    innerWidth > 900 ? setIsMobileHeader(false) : setIsMobileHeader(true);
  };

  const throttleHandleResize = throttle(500, handleResize);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', throttleHandleResize);
    return () => window.removeEventListener('resize', throttleHandleResize);
  }, []);

  return (
    <>
      {isMobileHeader ? (
        <MobileHeader>{children}</MobileHeader>
      ) : (
        <DesktopHeader>{children}</DesktopHeader>
      )}
    </>
  );
};

export default Header;
