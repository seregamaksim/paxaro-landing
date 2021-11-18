import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getCenterTopPosition } from '@/helpers/getCenterTopPosition';
import algorithmImg1 from '@/assets/images/algorithm-img1.svg';
import algorithmImg2 from '@/assets/images/algorithm-img2.svg';
import algorithmImg3 from '@/assets/images/algorithm-img3.svg';
import algorithmImg4 from '@/assets/images/algorithm-img4.svg';
import storePhone from '@/assets/images/store-banner-phone.png';
import appStoreImg from '@/assets/images/app-store.svg';
import googleStoreImg from '@/assets/images/google-play.svg';
import { appStoreLink, googlePlayLink } from '@/constants';

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
  const circleRef = useRef<HTMLDivElement>(null);
  const storeBannerSectionRef = useRef<HTMLDivElement>(null);
  const storeBannerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const algorithmTimeline = gsap.timeline({
        defaults: {
          ease: 'sine.out',
        },
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => (innerWidth > 768 ? '+=3500' : '+=3000'),
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
        .set(circleRef.current, {
          scale: innerWidth / innerHeight + 15,
        })
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
        .addLabel('finishHideThirdAndShowFourthCards')
        .to(
          circleRef.current,
          {
            scale: 0,
            duration: 0.8,
          },
          'finishHideThirdAndShowFourthCards'
        )
        .to(
          contentRef.current,
          {
            yPercent: -150,
            opacity: 0,
            duration: 0.8,
          },
          '<'
        )
        .from(
          storeBannerSectionRef.current,
          {
            yPercent: 150,
            duration: 1,
          },
          '<'
        )
        .addLabel('finishShowStoreBanner')
        .from(
          phoneRef.current,
          {
            yPercent: 80,
            duration: 0.5,
          },
          'finishShowStoreBanner'
        )
        .addLabel('finish');
    }, 0);
  }, []);

  return (
    <Root ref={rootRef}>
      <Circle ref={circleRef} />
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
      <StoreBannerSection ref={storeBannerSectionRef}>
        <StoreBanner ref={storeBannerRef}>
          <StoreBannerText>
            <Trans t={t} i18nKey="storesText">
              Ваш <span>личный карманный</span> брокер — <span>мобильное</span>{' '}
              приложение <span>Paxaro App.</span> Скачивайте{' '}
              <span>и управляйте инвестициями</span> на ходу.
            </Trans>
          </StoreBannerText>
          <StoresList>
            <StoreItem>
              <Link href={appStoreLink} passHref>
                <StoreLink>
                  <AppStoreImgWrapper>
                    <AppStoreImg />
                  </AppStoreImgWrapper>
                </StoreLink>
              </Link>
            </StoreItem>
            <StoreItem>
              <Link href={googlePlayLink} passHref>
                <StoreLink>
                  <GooglePlayImgWrapper>
                    <GooglePlayImg />
                  </GooglePlayImgWrapper>
                </StoreLink>
              </Link>
            </StoreItem>
          </StoresList>
          <PhoneWrapper ref={phoneRef}>
            <PhoneImg />
          </PhoneWrapper>
        </StoreBanner>
      </StoreBannerSection>
    </Root>
  );
};

const Root = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const StyledContainer = styled(Container)`
  padding-top: 75px;
  padding-bottom: 75px;
  height: 100%;

  position: relative;
  @media (max-width: 1100px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const Circle = styled.div`
  position: absolute;
  left: -15%;
  top: -10%;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  background-color: var(--black1);
  transform-origin: left;
  will-change: transform;
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
  will-change: transform, opacity;
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

const StoreBannerSection = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.94%;
  will-change: transform;
  max-width: 1440px;
  margin: 0 auto;
  transform: translateX(-50%);

  @media (min-width: 1440px) {
    padding: 100px;
  }
  @media (max-width: 1200px) {
    padding: 50px;
  }
  @media (max-width: 1024px) {
    padding: 50px 32px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const StoreBanner = styled.div`
  padding: 10.4% 6.45%;
  background-color: var(--white);
  border-radius: 45px;
  position: relative;
  box-shadow: 0px 21px 161px -46px rgba(147, 147, 147, 0.25);
  overflow: hidden;
  z-index: 0;
  @media (max-width: 1200px) {
    padding: 50px;
  }
  @media (max-width: 1024px) {
    padding: 50px 32px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 300px 20px;
  }
  @media (min-width: 320px) and (max-width: 768px) and (max-height: 750px) {
    padding-bottom: 250px;
  }
`;

const StoreBannerText = styled.p`
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  color: var(--black3);
  max-width: 76.6%;
  margin-bottom: 60px;
  span {
    color: var(--darkGray);
  }
  @media (max-width: 1200px) {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 45px;
    max-width: none;
    align-self: flex-start;
  }
`;

const StoresList = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 45px;
  }
`;

const StoreItem = styled.li`
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StoreLink = styled.a`
  filter: drop-shadow(0px 6px 23px rgba(0, 0, 0, 0.08));
`;

const AppStoreImgWrapper = styled.div`
  @media (max-width: 768px) {
    width: 154px;
  }
`;

const GooglePlayImgWrapper = styled.div`
  @media (max-width: 768px) {
    width: 170px;
  }
`;

const AppStoreImg = styled(Image).attrs(() => ({
  src: appStoreImg,
  alt: 'App Store app',
}))``;

const GooglePlayImg = styled(Image).attrs(() => ({
  src: googleStoreImg,
  alt: 'Google play app',
}))``;

const PhoneWrapper = styled.div`
  position: absolute;
  top: 8%;
  right: -5.5%;
  will-change: transform;
  filter: drop-shadow(-6px -6px 51px rgba(168, 168, 168, 0.25));

  @media (max-width: 1200px) {
    right: -15%;
  }
  @media (max-width: 800px) {
    width: 280px;
  }
  @media (max-width: 768px) {
    top: auto;
    bottom: -260px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (min-width: 320px) and (max-width: 768px) and (max-height: 750px) {
    bottom: -300px;
  }
`;

const PhoneImg = styled(Image).attrs(() => ({
  src: storePhone,
  alt: 'Paxaro app',
}))``;

export default Algorithm;
