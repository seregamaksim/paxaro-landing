import type { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/OtherPage/HeaderBottom/HeaderBottom';
import { Content } from '@/pageComponents/TermOfUse/Content';
import { getSelectorsByUserAgent } from 'react-device-detect';

interface TermOfUsePageProps {
  userAgent: { [key: string]: any };
}
const TermOfUse: NextPage<TermOfUsePageProps> = ({ userAgent }) => {
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
      'term-of-use',
    ])),
  },
});

export default TermOfUse;
