import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { Content } from '@/pageComponents/TextPage/Content';
import TextPageLayout from '@/layouts/TextPageLayout';

interface CookiePageProps {
  userAgent: { [key: string]: any };
}

const Cookie: NextPage<CookiePageProps> = ({ userAgent }) => {
  return (
    <TextPageLayout userAgent={userAgent}>
      <main>
        <Content translateName="cookiePolicy" />
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
      'cookiePolicy',
    ])),
  },
});

export default Cookie;
