import { FC, useEffect, useRef, useState } from 'react';
import { MobileHeader } from './components/MobileHeader';
import { DesktopHeader } from './components/DesktopHeader';

interface HeaderProps {
  userAgent: { [key: string]: any };
}

const Header: FC<HeaderProps> = ({ children, userAgent }) => {
  const [isMobileHeader, setIsMobileHeader] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => setWindowWidth(innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    innerWidth > 900 ? setIsMobileHeader(false) : setIsMobileHeader(true);
  }, [windowWidth]);

  return (
    <>
      {isMobileHeader ? (
        <MobileHeader userAgent={userAgent}>{children}</MobileHeader>
      ) : (
        <DesktopHeader>{children}</DesktopHeader>
      )}
    </>
  );
};

export default Header;
