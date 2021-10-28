import type { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/HomePage/HeaderBottom/HeaderBottom';
import LeadForm from '@/pageComponents/HomePage/LeadFormSection/LeadFormSection';
import { WhyPaxaro } from '@/pageComponents/HomePage/WhyPaxaro';
import { CalculatorSection } from '@/pageComponents/HomePage/CalculatorSection';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header>
        <HeaderBottom />
      </Header>
      <main>
        <WhyPaxaro />

        <CalculatorSection />

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
    ])),
  },
});
export default Home;
