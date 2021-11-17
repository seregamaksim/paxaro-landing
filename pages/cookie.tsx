import type { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/OtherPage/HeaderBottom/HeaderBottom';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { Content } from '@/pageComponents/CookiePolicy/Content';

interface CookiePageProps {
  userAgent: { [key: string]: any };
}
const Cookie: NextPage<CookiePageProps> = ({ userAgent }) => {
  return (
    <MainLayout>
      <Header userAgent={userAgent}>
        <HeaderBottom />
      </Header>
      <main>
        <Content />
      </main>
    </MainLayout>
  );
};

export const getServerSideProps = async ({ locale, req }: any) => ({
  props: {
    userAgent: req
      ? getSelectorsByUserAgent(req.headers['user-agent'])
      : navigator.userAgent,
    ...(await serverSideTranslations(locale, [
      'common',
      'header',
      'footer',
      'cookies',
      'cookiePolicy',
    ])),
  },
});

export default Cookie;
