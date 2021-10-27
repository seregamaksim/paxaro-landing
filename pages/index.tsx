import type { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/HomePage/HeaderBottom/HeaderBottom';
import LeadForm from '@/pageComponents/HomePage/LeadFormSection/LeadFormSection';
import { Hero } from '@/pageComponents/HomePage/Hero';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Header>
        <HeaderBottom />
      </Header>
      <main>
        <Hero />

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
      'leadForm',
      'hero',
    ])),
  },
});
export default Home;
