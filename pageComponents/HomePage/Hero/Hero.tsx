import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { Button } from '@/ui/components/Button';
import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Link from 'next/link';
import { CanvasNotebook } from './components/CanvasNotebook';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Hero: FC = () => {
  const { t } = useTranslation('hero');
  const rootRef = useRef(null);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // const heroTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: rootRef.current,
    //     start: 'top bottom',
    //     // end: '+=4000',
    //     markers: true,
    //     scrub: 1,
    //     // pin: true,
    //   },
    // });
  }, []);

  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <Head>
          <SectionTitle>{t('title')}</SectionTitle>
          <SectionText>{t('subtitle')}</SectionText>
          <Link href="#" passHref>
            <StyledLink text={t('btnText')} isLink />
          </Link>
        </Head>

        <CanvasNotebook
          scrollHeight={4000}
          width={1158}
          height={770}
          numFrames={142}
        />
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section``;

const StyledContainer = styled(Container)`
  padding-top: 66px;
`;

const Head = styled.div`
  margin-bottom: 66px;
  color: var(--black2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 67px;
  text-align: center;

  max-width: 635px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    max-width: 325px;
    margin-bottom: 14px;
  }
`;

const SectionText = styled.p`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.01em;
  margin-bottom: 50px;
  max-width: 555px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 32px;
    max-width: 325px;
  }
`;

const StyledLink = styled(Button)``;

export default Hero;
