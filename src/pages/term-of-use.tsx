import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { Content } from '@/pageComponents/TextPage/Content';
import TextPageLayout from '@/layouts/TextPageLayout';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

interface TermOfUsePageProps {
  userAgent: { [key: string]: any };
}
const TermOfUse: NextPage<TermOfUsePageProps> = ({ userAgent }) => {
  const { t } = useTranslation('term-of-use');
  return (
    <TextPageLayout userAgent={userAgent}>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
      </Head>
      <main>
        <Content translateName="term-of-use" />
      </main>
    </TextPageLayout>
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
