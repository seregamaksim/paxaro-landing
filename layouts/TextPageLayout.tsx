import { FC } from 'react';
import styled from 'styled-components';
import { Footer } from '@/components/Footer';

import { Cookies } from '@/components/Cookies';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/TextPage/HeaderBottom/HeaderBottom';

interface UserAgent {
  userAgent: { [key: string]: any };
}

const TextPageLayout: FC<UserAgent> = ({ children, userAgent }) => {
  return (
    <Root>
      <Header userAgent={userAgent}>
        <HeaderBottom />
      </Header>
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
