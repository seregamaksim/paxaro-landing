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
import React, { useEffect, useState } from 'react';
import { debounce } from 'throttle-debounce';

interface HomePageProps {
  userAgent: { [key: string]: any };
}

export const MobileMenuContext = React.createContext<any>(undefined);

const Home: NextPage<HomePageProps> = ({ userAgent }) => {
  const { t } = useTranslation('common');
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const contextMobileMenuValue = {
    isOpenMenu,
    setIsOpenMenu,
    userAgent,
  };

  useEffect(() => {
    const resizeRefreshDebouncing = debounce(300, false, () => {
      if (userAgent.isDesktop) location.reload();
    });

    window.addEventListener('resize', resizeRefreshDebouncing);
    return () => {
      window.removeEventListener('resize', resizeRefreshDebouncing);
    };
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
      </Head>
      <Preloader />

      <MobileMenuContext.Provider value={contextMobileMenuValue}>
        <Header>
          <HeaderBottom />
        </Header>
      </MobileMenuContext.Provider>

      <main>
        <Hero userAgent={userAgent} />
        <WhyPaxaro />
        <CalculatorSection isSafari={userAgent.isSafari} />
        <Advantages />
        <Education />
        <Algorithm />
        <PlansSection />
        <Fear />
        <PartnerProgramm isSafari={userAgent.isSafari} />
        <MobileApp />
        <LeadForm />
      </main>
    </MainLayout>
  );
};

export const getServerSideProps = async ({ locale, req }: any) => {
  return {
    props: {
      userAgent: req
        ? getSelectorsByUserAgent(req.headers['user-agent'])
        : navigator.userAgent,
      // ...(await serverSideTranslations(locale, [
      //   'common',
      //   'header',
      //   'footer',
      //   'cookies',
      //   'leadForm',
      //   'hero',
      //   'whyPaxaro',
      //   'calculator',
      //   'plans',
      //   'education',
      //   'advantages',
      //   'algorithm',
      //   'fear',
      //   'partnerProgramm',
      // ])),
    },
  };
};

export default Home;
