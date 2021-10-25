import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '../layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '../components/Header';
import styled from 'styled-components';
import { ActiveLink } from '../components/ActiveLink';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Header>
        <HeaderBottomMenu>
          <HeaderBottomMenuItem>
            <ActiveLink href="/#history" activeClassName="active" passHref>
              <HeaderBottomMenuLink>
                {t('secondMain.history')}
              </HeaderBottomMenuLink>
            </ActiveLink>
          </HeaderBottomMenuItem>
          <HeaderBottomMenuItem>
            <ActiveLink href="/#advantages" activeClassName="active" passHref>
              <HeaderBottomMenuLink>
                {t('secondMain.advantages')}
              </HeaderBottomMenuLink>
            </ActiveLink>
          </HeaderBottomMenuItem>
          <HeaderBottomMenuItem>
            <ActiveLink
              href="/#knowledgeBase"
              activeClassName="active"
              passHref
            >
              <HeaderBottomMenuLink>
                {t('secondMain.knowledgeBase')}
              </HeaderBottomMenuLink>
            </ActiveLink>
          </HeaderBottomMenuItem>
          <HeaderBottomMenuItem>
            <ActiveLink href="/#howWork" activeClassName="active" passHref>
              <HeaderBottomMenuLink>
                {t('secondMain.howWork')}
              </HeaderBottomMenuLink>
            </ActiveLink>
          </HeaderBottomMenuItem>
          <HeaderBottomMenuItem>
            <ActiveLink href="/#subscription" activeClassName="active" passHref>
              <HeaderBottomMenuLink>
                {t('secondMain.subscription')}
              </HeaderBottomMenuLink>
            </ActiveLink>
          </HeaderBottomMenuItem>
          <HeaderBottomMenuItem>
            <ActiveLink href="/#howToStart" activeClassName="active" passHref>
              <HeaderBottomMenuLink>
                {t('secondMain.howToStart')}
              </HeaderBottomMenuLink>
            </ActiveLink>
          </HeaderBottomMenuItem>
        </HeaderBottomMenu>
      </Header>
      <main></main>
    </MainLayout>
  );
};

const HeaderBottomMenu = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
    /* margin-bottom: 24px; */
    /* border-bottom: 1px solid rgba(153, 153, 153, 0.3); */
  }
`;
const HeaderBottomMenuItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin-right: 15px;
  }
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const HeaderBottomMenuLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;

  color: var(--white);
  &.active {
    color: var(--green);
  }
`;

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header'])),
  },
});
export default Home;
