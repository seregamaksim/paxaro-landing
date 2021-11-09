import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Algorithm: FC = () => {
  const { t } = useTranslation('algorithm');
  const rootRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const algorithmTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: '+=2000',
        pin: true,
        markers: true,
      },
    });

    algorithmTimeline
      .addLabel('start')
      .to(
        rootRef.current,
        {
          backgroundColor: '#000',
          duration: 1,
        },
        'start'
      )
      .to(
        headRef.current,
        {
          y: -300,
          duration: 1,
        },
        'start'
      );
  }, []);

  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <SectionHead ref={headRef}>
          <StyledSectionLabel text={t('label')} isDark />
          <StyledSectionTitle text={t('title')} />
          <StyledSubtitle>{t('subtitle')}</StyledSubtitle>
        </SectionHead>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section`
  background-color: red;
  height: 100vh;
`;

const StyledContainer = styled(Container)`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  color: var(--white);
  margin-bottom: 24px;
`;

const StyledSubtitle = styled.p`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.01em;
  color: var(--white);
  max-width: 671px;
`;

export default Algorithm;
