import { FC } from 'react';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

interface IMainLayoutProps {}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Root>
      {children}
      <Footer />
    </Root>
  );
};

const Root = styled.div`
  /* padding-top: 133px;
  @media (max-width: 900px) {
    padding-top: 86px;
  } */
`;
export default MainLayout;
