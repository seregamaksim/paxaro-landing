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

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header>
        <HeaderBottom />
      </Header>
      <main>
        <WhyPaxaro />

        <CalculatorSection />

        <Education />
        <PlansSection />
        <MobileApp />
        <LeadForm />
      </main>
    </MainLayout>
  );
};

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
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
    ])),
  },
});
export default Home;
