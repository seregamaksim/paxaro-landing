import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '@/components/Footer';

import { Cookies } from '@/components/Cookies';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/TextPage/HeaderBottom/HeaderBottom';
import { MobileMenuContext } from '@/pages';

interface UserAgent {
  userAgent: { [key: string]: any };
}

const TextPageLayout: FC<UserAgent> = ({ children, userAgent }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const contextMobileMenuValue = {
    isOpenMenu,
    setIsOpenMenu,
    userAgent,
  };
  return (
    <Root>
      <MobileMenuContext.Provider value={contextMobileMenuValue}>
        <Header>
          <HeaderBottom />
        </Header>
      </MobileMenuContext.Provider>
      {children}
      <Footer />
      <Cookies />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

export default TextPageLayout;
