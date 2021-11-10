import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import algorithmImg1 from '@/assets/images/algorithm-img1.svg';
import algorithmImg2 from '@/assets/images/algorithm-img2.svg';
import algorithmImg3 from '@/assets/images/algorithm-img3.svg';
import algorithmImg4 from '@/assets/images/algorithm-img4.svg';
import { getCenterTopPosition } from '@/helpers/getCenterTopPosition';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Algorithm: FC = () => {
  const { t } = useTranslation('algorithm');
  const rootRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageListRef = useRef<HTMLDivElement[]>([]);
  const descriptionListRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const algorithmTimeline = gsap.timeline({
      defaults: {
        ease: 'sine.out',
      },
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: () => '+=2500',
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 2 },
          delay: 0.2,
          ease: 'sine.out',
        },
      },
    });

    algorithmTimeline
      .addLabel('start')
      .to(
        headRef.current,
        {
          yPercent: -100,
          opacity: 0,
          duration: 0.5,
        },
        'start+=0.1'
      )
      .to(
        contentRef.current,
        {
          y:
            innerWidth > 768
              ? getCenterTopPosition(rootRef!.current!, contentRef!.current!)
                  .y / 2
              : getCenterTopPosition(rootRef!.current!, contentRef!.current!)
                  .y + 20,
          duration: 0.5,
        },
        '<'
      )
      .addLabel('finishMoveContent')
      .to(
        [imageListRef.current[0], descriptionListRef.current[0]],
        {
          yPercent: -100,
          duration: 0.6,
        },
        'finishMoveContent+=0.1'
      )
      .to(
        [imageListRef.current[1], descriptionListRef.current[1]],
        {
          y: 0,
          duration: 0.6,
        },
        '<'
      )
      .addLabel('finishHideFirstAndShowSecondCards')
      .to(
        [imageListRef.current[1], descriptionListRef.current[1]],
        {
          yPercent: -100,
          duration: 0.6,
        },
        'finishHideFirstAndShowSecondCards+=0.2'
      )
      .to(
        [imageListRef.current[2], descriptionListRef.current[2]],
        {
          y: 0,
          duration: 0.6,
        },
        '<'
      )
      .addLabel('finishHideSecondAndShowThirdCards')
      .to(
        [imageListRef.current[2], descriptionListRef.current[2]],
        {
          yPercent: -100,
          duration: 0.6,
        },
        'finishHideSecondAndShowThirdCards+=0.2'
      )
      .to(
        [imageListRef.current[3], descriptionListRef.current[3]],
        {
          y: 0,
          duration: 0.6,
        },
        '<'
      )
      .addLabel('finishHideThirdAndShowFourthCards');
  }, []);

  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <SectionHead ref={headRef}>
          <StyledSectionLabel text={t('label')} isDark />
          <StyledSectionTitle text={t('title')} />
          <Subtitle>{t('subtitle')}</Subtitle>
        </SectionHead>
        <Content ref={contentRef}>
          <GreenContentSection>
            <ContentSectionItem
              ref={(item: HTMLDivElement) => {
                imageListRef.current[0] = item;
              }}
            >
              <Image src={algorithmImg1} alt={t('registration')} />
            </ContentSectionItem>
            <ContentSectionItem
              ref={(item: HTMLDivElement) => {
                imageListRef.current[1] = item;
              }}
            >
              <Image src={algorithmImg2} alt={t('renewal')} />
            </ContentSectionItem>
            <ContentSectionItem
              ref={(item: HTMLDivElement) => {
                imageListRef.current[2] = item;
              }}
            >
              <Image src={algorithmImg3} alt={t('chosePlan')} />
            </ContentSectionItem>
            <ContentSectionItem
              ref={(item: HTMLDivElement) => {
                imageListRef.current[3] = item;
              }}
            >
              <Image src={algorithmImg4} alt={t('choseStrategy')} />
            </ContentSectionItem>
          </GreenContentSection>
          <ContentSection>
            <DescriptionContentSectionItem
              ref={(item: HTMLDivElement) => {
                descriptionListRef.current[0] = item;
              }}
            >
              <DescriptionText>{t('registration')}</DescriptionText>
            </DescriptionContentSectionItem>
            <DescriptionContentSectionItem
              ref={(item: HTMLDivElement) => {
                descriptionListRef.current[1] = item;
              }}
            >
              <DescriptionText>{t('renewal')}</DescriptionText>
            </DescriptionContentSectionItem>
            <DescriptionContentSectionItem
              ref={(item: HTMLDivElement) => {
                descriptionListRef.current[2] = item;
              }}
            >
              <DescriptionText>{t('chosePlan')}</DescriptionText>
            </DescriptionContentSectionItem>
            <DescriptionContentSectionItem
              ref={(item: HTMLDivElement) => {
                descriptionListRef.current[3] = item;
              }}
            >
              <DescriptionText>{t('choseStrategy')}</DescriptionText>
            </DescriptionContentSectionItem>
          </ContentSection>
        </Content>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section`
  background-color: var(--black1);
  height: 100vh;
`;

const StyledContainer = styled(Container)`
  padding-top: 75px;
  padding-bottom: 75px;
  height: 100%;
  @media (max-width: 1100px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 80px;
  will-change: transform, opacity;
  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
`;

const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  color: var(--white);
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.01em;
  color: var(--white);
  max-width: 671px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  will-change: transform;
  overflow: hidden;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    column-gap: 0;
    max-width: 335px;
    margin: 0 auto;
  }
  @media (min-width: 320px) and (max-width: 768px) and (max-height: 700px) {
    max-width: 280px;
  }
`;

const ContentSection = styled.div`
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  z-index: 0;
  padding-bottom: 100%;
  background: var(--lightGray);
  counter-reset: counterDescription;
`;

const ContentSectionItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  border-radius: 50px;
  overflow: hidden;

  &:not(:first-child) {
    transform: translateY(100%);
  }
`;

const DescriptionContentSectionItem = styled(ContentSectionItem)`
  &::before {
    counter-increment: counterDescription;
    content: counter(counterDescription, decimal-leading-zero) ' ';
    position: absolute;
    left: 0;
    top: -22px;
    font-weight: bold;
    font-size: 331px;
    line-height: 140%;
    letter-spacing: 0.01em;

    color: var(--white);
  }

  @media (max-width: 1150px) {
    &::before {
      font-size: 238px;
    }
  }
  @media (max-width: 768px) {
    &::before {
      font-size: 209px;
    }
  }
`;

const DescriptionText = styled.p`
  font-weight: bold;
  font-size: 48px;
  line-height: 67px;
  position: relative;

  text-align: center;
  color: var(--black2);
  max-width: 360px;
  @media (max-width: 1150px) {
    font-size: 36px;
    line-height: 48px;
  }
  @media (max-width: 850px) {
    font-size: 24px;
    line-height: 34px;
    max-width: 275px;
  }
`;

const GreenContentSection = styled(ContentSection)`
  background: var(--greenGradient);
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default Algorithm;
