import { FC } from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

interface IMainLayoutProps {}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  padding-top: 133px;
`;
export default MainLayout;
