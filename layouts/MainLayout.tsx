import { FC } from 'react';
import styled from 'styled-components';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

interface IMainLayoutProps {}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Root>
      {children}
      <Footer />
    </Root>
  );
};

const Root = styled.div``;
export default MainLayout;
