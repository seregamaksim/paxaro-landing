import type { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/HomePage/HeaderBottom/HeaderBottom';
import LeadForm from '@/pageComponents/HomePage/LeadFormSection/LeadFormSection';
import { WhyPaxaro } from '@/pageComponents/HomePage/WhyPaxaro';
import { CalculatorSection } from '@/pageComponents/HomePage/CalculatorSection';
import { MobileApp } from '@/pageComponents/HomePage/MobileApp';
import { PlansSection } from '@/pageComponents/HomePage/PlansSection';
import { Education } from '@/pageComponents/HomePage/Education';
import { Advantages } from '@/pageComponents/HomePage/Advantages';
import { getSelectorsByUserAgent } from 'react-device-detect';

interface Props {
  userAgent: { [key: string]: any };
}
const Home: NextPage<Props> = ({ userAgent }) => {
  return (
    <MainLayout>
      <Header userAgent={userAgent}>
        <HeaderBottom />
      </Header>
      <main>
        <WhyPaxaro />

        <CalculatorSection />
        <Advantages />
        <Education />
        <PlansSection />
        <MobileApp />
        <LeadForm />
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
      'leadForm',
      'whyPaxaro',
      'calculator',
      'plans',
      'education',
      'advantages',
      'algorithm',
    ])),
  },
});

export default Home;
