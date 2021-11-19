import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { Content } from '@/pageComponents/TextPage/Content';
import TextPageLayout from '@/layouts/TextPageLayout';

interface TermOfUsePageProps {
  userAgent: { [key: string]: any };
}
const TermOfUse: NextPage<TermOfUsePageProps> = ({ userAgent }) => {
  return (
    <TextPageLayout userAgent={userAgent}>
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
