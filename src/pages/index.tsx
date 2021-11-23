import type { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '@/components/Header';
import HeaderBottom from '@/pageComponents/HomePage/HeaderBottom/HeaderBottom';
import LeadForm from '@/pageComponents/HomePage/LeadFormSection/LeadFormSection';
import { Hero } from '@/pageComponents/HomePage/Hero';
import { WhyPaxaro } from '@/pageComponents/HomePage/WhyPaxaro';
import { CalculatorSection } from '@/pageComponents/HomePage/CalculatorSection';
import { MobileApp } from '@/pageComponents/HomePage/MobileApp';
import { PlansSection } from '@/pageComponents/HomePage/PlansSection';
import { Education } from '@/pageComponents/HomePage/Education';
import { Advantages } from '@/pageComponents/HomePage/Advantages';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { Algorithm } from '@/pageComponents/HomePage/Algorithm';
import { Fear } from '@/pageComponents/HomePage/Fear';
import { PartnerProgramm } from '@/pageComponents/HomePage/PartnerProgramm';
import { Preloader } from '@/components/Preloader';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface HomePageProps {
  userAgent: { [key: string]: any };
}

const Home: NextPage<HomePageProps> = ({ userAgent }) => {
  const { t } = useTranslation('common');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    window.addEventListener('resize', function () {
      console.log('refresh');
      // ScrollTrigger.getById('whyPaxaro').disable();
      // // ScrollTrigger.getAll().forEach((item) => item.disable());
      // ScrollTrigger.getById('whyPaxaro').enable();
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
      </Head>
      <Preloader />
      <Header userAgent={userAgent}>
        <HeaderBottom />
      </Header>
      <main>
        <Hero />
        <WhyPaxaro />
        {/* <CalculatorSection />
        <Advantages />
        <Education />
        <Algorithm />
        <PlansSection />
        <Fear />
        <PartnerProgramm />
        <MobileApp />
        <LeadForm /> */}
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
      'hero',
      'whyPaxaro',
      'calculator',
      'plans',
      'education',
      'advantages',
      'algorithm',
      'fear',
      'partnerProgramm',
    ])),
  },
});

export default Home;
