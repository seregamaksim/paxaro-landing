import { FC } from 'react';
import styled from 'styled-components';
import { Footer } from '@/components/Footer';

import { Cookies } from '@/components/Cookies';

const MainLayout: FC = ({ children }) => {
  return (
    <Root>
      {children}
      <Footer />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

export default MainLayout;
